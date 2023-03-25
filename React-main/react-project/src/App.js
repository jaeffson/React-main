import React,{useState} from 'react';
import Perfil from './assets/perfil.svg'
import Arrow from './assets/seta.svg.svg'
import Lixeira from './assets/lixo.svg'
import { Container, H1, Image, ContainerItens, Label, LabelInput, Button, Liste, ListeLi } from './styles';


function App() {
  //Ferramenta Auxiliar UserState
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [showAlert, setShowAlert] = useState(false);
    
    function AddNewUser() {
      const exists = users.some((user) => user.name === name);
  if (exists) {
    alert('Usuário já existe!');
    return;
  }
  setUsers([...users, { id: Math.random(), name, age }]);
}

    
  function changeInpuName(event){
      setName(event.target.value)
  }
  function changeInpuAge(event){
    const novoValor = event.target.value;
    if (isNaN(novoValor)) {
      alert('Por favor, digite apenas números na idade.');
      setAge('');
    } else {
      setAge();
    }
  }
  
  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

 

  return (
    <Container>
      <Image alt='foto-perfil' src={Perfil}></Image>

      <ContainerItens>
        <H1 > Olá</H1>
        <Label> Nome </Label>
        <LabelInput onChange={changeInpuName} placeholder="digite seu nome"></LabelInput>

        <Label>Idade</Label>
       
        <LabelInput id='meu-campo' onChange={changeInpuAge} placeholder="digite sua idade"></LabelInput>
       
      
        <Button  onClick={AddNewUser}>Cadastrar <img alt='seta' src={Arrow}></img></Button>

        <ul>
          {users.map((user) => {
            return (
              <ListeLi key={user.id}>
                <p>{user.name}</p> 
                <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}> <img src={Lixeira}></img></button>
              </ListeLi>
            );
          })}
        </ul>
      </ContainerItens>
    </Container>
  )
  

}
export default App

