import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

const useProfileImage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const updateProfileImage = async (file) => {
        if (!file || !user?.email) {
            console.error("❌ Missing file or user email");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = async () => {
            const newImage = reader.result;

            try {
                console.log("🟡 Uploading image for user:", user.email);

                // Find user by email
                const res = await fetch(`http://localhost:5000/users?email=${user.email}`);
                const users = await res.json();
                if (!users.length) throw new Error("User not found in db.json");
                const foundUser = users[0];

                // Update user with new image
                const updatedUser = { ...foundUser, image: newImage };
                const updateRes = await fetch(`http://localhost:5000/users/${foundUser.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedUser),
                });

                if (!updateRes.ok) throw new Error("Failed to update user in db.json");

                console.log("✅ Profile image saved to db.json");

                // Sync Redux + localStorage
                dispatch(login(updatedUser));
                localStorage.setItem("user", JSON.stringify(updatedUser));
            } catch (err) {
                console.error("❌ Error updating profile image:", err);
            }
        };

        reader.onerror = (err) => {
            console.error("❌ FileReader failed:", err);
        };

        reader.readAsDataURL(file);
    };

    return { updateProfileImage };
};

export default useProfileImage;
