import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api'

/**
 * Não possuem valor semântico (significado)
 * Não possuem estilização própria
 * Todos componentes possuem por padrão "display: flex"
 * 
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3
 * 
 */

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => { 
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`])

    const response = await api.post('projects', {
      title: `Projeto ${Date.now()}`,
      owner: "Roberto Zanin Cel"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      
      <SafeAreaView style={styles.container}>
       

        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        /> 

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
        
        
      </SafeAreaView>  
      
     
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})