import { useEffect, useState } from "react";
import api from "../services/api";

interface Profile {
  id: number;
  name: string;
  email: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<Profile>("/profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch(() => {
        setError("Не удалось загрузить профиль");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!profile) {
    return <h2>Профиль не найден</h2>;
  }

  return (
    <div>
      <h1>Личный кабинет</h1>

      <p>ID: {profile.id}</p>
      <p>Имя: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}