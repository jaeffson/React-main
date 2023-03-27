import React, { useState, useRef } from 'react';
import Perfil from './assets/perfil.svg'
import Arrow from './assets/seta.svg.svg'
import Lixeira from './assets/lixo.svg'
import { Container, H1, Image, ContainerItens, Label, LabelInput, Button, Liste, ListeLi } from './styles';


function App() {
  //Ferramenta Auxiliar UserState
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const [showAlert, setShowAlert] = useState(false);

  function AddNewUser() {

      setUsers([...users,
    {
      id: Math.random(),
      name:inputName.current.value,
      age:inputAge.current.value,
   }]);
  }
  const exists = users.some((user) => user.inputName === inputName);
  if (exists) {
    alert('Usuário já existe!');
    return;
  }



  // const novoValor = event.target.value;
 //   if (isNaN(novoValor)) {
   //   alert('Por favor, digite apenas números na idade.');
//setAge('');
//   } else {
//setAge();
//}
//}

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }



  return (
    <Container>
      <Image alt='foto-perfil' src={Perfil}></Image>

      <ContainerItens>
        <H1 > Olá</H1>
        <Label> Nome </Label>
        <LabelInput ref={inputName} placeholder="digite seu nome"></LabelInput>

        <Label>Idade</Label>

        <LabelInput id='meu-campo' ref={inputAge} placeholder="digite sua idade"></LabelInput>


        <Button onClick={AddNewUser}>Cadastrar <img alt='seta' src={Arrow}></img></Button>

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

