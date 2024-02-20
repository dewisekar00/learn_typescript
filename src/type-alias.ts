// Dari pada mennggunakan any kita bisa pake alias

// union type alias
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  // ? ini untuk optional properties
  description?: string
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};

// saat menggunakan alias dan mau nambah attribute ketika dipanggil/diluar definisikan itu ngga bisa jadi lebih aman


