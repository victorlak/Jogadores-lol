import './App.css';
import React from 'react';
import { Button, Card, CardBody, CardText, Container, Row, Col} from 'reactstrap';
import { useState } from 'react';
import players from './Dados';



function Jogadores() {
       const [jogadores,setJogadores] = useState(players)
       const [textContent,settextContent] = useState('')

       function handleChange(e){

        let valor = e.target.value

        settextContent(valor)

            
        let jogadores2 = jogadores


        jogadores2 = players.filter((jogador)=>{

            if(jogador.nome.includes(valor))
                return true
        }
        )
        setJogadores(jogadores2)




       }
       
  return (
    

    <Container fluid className='pai'>
        <Container className='BarraExplorar'>
            <input onChange={handleChange} className='inp' placeholder="Pesquisar por nome"></input>
        </Container>
        <Container className="">
        <Row >
            {jogadores.map((jogador) => (
            <Col md='3'>
                <Card  className='card'>
                    <CardBody>
                        <h1>{jogador.nome}</h1>
                        <CardText>Idade: {jogador.idade}</CardText>
                        <CardText>Derrotas: {jogador.derrotas}</CardText>
                        <CardText>Vitórias: {jogador.vitorias}</CardText>
                        <CardText>Nacionalidade: {jogador.nacionalidade}</CardText>
                </CardBody>
                </Card>
            </Col>
            
        
            ))}
        </Row>
   
        </Container>
    </Container>
  );
}

export default Jogadores;