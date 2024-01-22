"use client";
import { useState } from "react";
import ShoppingList from "./components/CardShoppingList";

export default function Home() {
  const [toDo, setToDo] = useState(false);

  const listShopping = [
    {
      clientName: " Felipe Emanuel",
      address: " Rua centro nº 10",
      phone: " (19) 9 9999-9999",
      paymentMethod: " Dinheiro",
      productList: [
        {
          productName: "Macarrão",
          quantity: "2kg",
        },
        {
          productName: "Feijão",
          quantity: "2kg",
        },
        {
          productName: "Batata",
          quantity: "2kg",
        },
        {
          productName: "Peito de frango",
          quantity: "2kg",
        },
        {
          productName: "Leite",
          quantity: "1L",
        },
      ],
      note: "Trazer o peito de frando sem pele e o feijão sem pedra",
    },
    {
      clientName: " Fernando Souza",
      address: " Rua centro nº 10",
      phone: " (19) 9 9999-9999",
      paymentMethod: " Cartão",
      productList: [
        {
          productName: "Leite",
          quantity: "230L",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F8F6F5]">
      <div className="w-4/6 h-5/6 bg-white rounded-md shadow-inner border p-5">
        <h1 className="text-[#97857d]">Pedidos</h1>
        <hr />
        <div className="w-full my-10 gap-2 bg-[#f7f2f0] rounded-md p-4">
          <ul className=" mt-8 grid grid-cols-2 gap-4">
            {listShopping.map((c) => (
              <ShoppingList
                key={c?.phone}
                clientName={c?.clientName}
                phone={c?.phone}
                address={c?.address}
                paymentMethod={c?.paymentMethod}
                productList={c?.productList}
                note={c?.note}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
