import './App.css';
import React from 'react';
import { Card, CardBody, CardText, Container, Row, Col } from 'reactstrap';

function Jogadores() {

    let jogadores = [
        {
          nome: 'João',
          idade: 30,
          derrotas: 5,
          vitorias: 10,
          nacionalidade: 'BR'
        },
        {
          nome: 'Maria',
          idade: 25,
          derrotas: 3,
          vitorias: 8,
          nacionalidade: 'NA'
        },
        {
          nome: 'Carlos',
          idade: 20,
          derrotas: 2,
          vitorias: 12,
          nacionalidade: 'KR'
        },
        {
          nome: 'Ana',
          idade: 22,
          derrotas: 4,
          vitorias: 7,
          nacionalidade: 'BR'
        },
        {
          nome: 'Luís',
          idade: 28,
          derrotas: 6,
          vitorias: 9,
          nacionalidade: 'NA'
        },
        {
          nome: 'Fernanda',
          idade: 26,
          derrotas: 1,
          vitorias: 11,
          nacionalidade: 'NA'
        },
        {
          nome: 'Pedro',
          idade: 24,
          derrotas: 7,
          vitorias: 5,
          nacionalidade: 'BR'
        },
        {
          nome: 'Patricia',
          idade: 27,
          derrotas: 8,
          vitorias: 4,
          nacionalidade: 'KR'
        }
       ];
       


  return (

    <>
    <Container className='BarraExplorar'>
        <input placeholder="Pesquisar por nome"></input>
    </Container>
    <Container className="cards">
      
     {jogadores.map((jogador, index) => (
       
         <Card  className='card'>
           <CardBody>
               <h1>{jogador.nome}</h1>
               <CardText>Idade: {jogador.idade}</CardText>
               <CardText>Derrotas: {jogador.derrotas}</CardText>
               <CardText>Vitórias: {jogador.vitorias}</CardText>
               <CardText>Nacionalidade: {jogador.nacionalidade}</CardText>
           </CardBody>
         </Card>
       
     ))}
   
    </Container>
    </>
  );
}

export default Jogadores;