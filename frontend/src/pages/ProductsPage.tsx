import { useEffect, useState } from "react";
import api from "../services/api";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<Product[]>("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setError("Не удалось загрузить товары");
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

  return (
    <div>
      <h1>Каталог товаров</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Цена: {product.price} ₽</p>
        </div>
      ))}
    </div>
  );
}