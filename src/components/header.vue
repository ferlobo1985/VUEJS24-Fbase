<template>
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">FBase</span>
        </a>
  
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link to="/users/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <p
              role="button"
              class="nav-link"
              @click="handleSignOut"
            >
              Logout
            </p>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link to="/admin/add_article" class="nav-link">Add</router-link>
          </li>
        </ul>
      </header>
    </div>
  </template>

<script setup>
  import { AUTH } from '@/firebase/configs';
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { ref } from 'vue';

  const isAuth = ref(AUTH.currentUser);

  onAuthStateChanged(AUTH,(user)=>{
    console.log(user);
    isAuth.value = user;
  })


  const handleSignOut = () =>{
    signOut(AUTH)
  }
</script>
  
  <style>
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  </style>
  