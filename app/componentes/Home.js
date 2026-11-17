"use client";

import { useState } from "react";
import { criarTarefa } from "@/lib/tarefas";

export default function Home() {
  const [texto, setTexto] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!texto.trim()) return;

    try {
      await criarTarefa(texto);
      setTexto("");
      alert("Tarefa criada!");
    } catch (erro) {
      console.error("Erro ao criar tarefa:", erro);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}