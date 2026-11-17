"use client";

import { useState } from "react";
import { criarTarefa } from "@/lib/tarefas";

export default function Home() {
  const [lista, setlista] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!lista.trim()) return;




    
    try {
      await criarTarefa(lista);
      setlista("");
      alert("Tarefa criada!");
    } catch (erro) {
      console.error("Erro ao criar tarefa:", erro);
    }
    console.log("testando nova branch")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={lista}
        onChange={(e) => setlista(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}