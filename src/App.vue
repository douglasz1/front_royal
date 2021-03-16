<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastro de Empresa</a>
      </div>
    </nav>

    <div class="container">
      <form>

          <label>Nome da Empresa</label>
          <input type="text" placeholder="Digite aqui">
          <label>Nome Completo</label>
          
          <input v-model="formulario.cpf" type="text" placeholder="Digite seu nome">
          
          <button type="button" @click="setInput= !setInput">{{ (setInput)? "CPF" : "CNPJ"}}</button>
          <div v-if="setInput == 0">
          <label>CPF</label>
          <input v-mask="'###.###.###-##'" v-model="formulario.cpf" type="text" placeholder="Digite o seu CPF">
          </div>
          <div v-if="setInput == 1">
          <label>CNPJ</label>
          <input v-model="formulario.cnpj" v-mask="'##.###.###/####-##'" type="text" placeholder="Digite o seu CNPJ">
          </div>
          <label>Municipío</label>
          <input type="text" placeholder="Digite Municipío">
          <label>Telefone</label>
          <input type="text" placeholder="Digite Contato">

          <button type="button" @click="createPerson()" class="waves-effect waves-light btn-small">
            Registrar
            <i class="material-icons left">save</i>
          </button>


      </form>

      <table>

        <thead>

          <tr>
            <th>Empresa</th>
            <th>Nome Completo</th>
            <th>CPF/CNPJ</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="produto of produtos" :key="produto.id">

            <td>{{ produto.name }}</td>
            <td>{{ produto.description }}</td>
            <td>{{ produto.price }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Produto from './services/products'

export default{

  data(){
    return {
      formulario: {
        nome: null,
        cpf: null,
        cnpj: null,
        cep: null,
        municipio: null,
      },
      setInput: false,
      produtos: []
    }
  },
  
  mounted(){
    this.getProdutos()
  },

methods: {
  getProdutos(){
    Produto.listar().then(resposta => {
      console.log(resposta.data)
      this.produtos = resposta.data.records
    })
  },
  createPerson(){
    
  }
}
}
  
</script>

<style>

</style>