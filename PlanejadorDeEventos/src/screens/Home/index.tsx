import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';

import { Participante } from '../../componentes/Participante';


export function Home() {

  const [participantes, setParticipantes] = useState<string[]>([]); //const [estado, atualiza] = useState(['João']);
  const [participanteName, setParticipanteName] = useState(''); 

  function handleParticipantAdd() {
    if(participantes.includes(participanteName)) {
      return Alert.alert('Participante Existe!', 'Já existe um participante com esse nome na lista de presença!');
    }
    setParticipantes(prevState =>[...prevState, participanteName]);
    setParticipanteName('');
    
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress:() => setParticipantes(prevState => prevState.filter(participante => participante !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return ( //usa-se return para exibir em tela

    <View style={styles.container}>

      <View style={styles.eventName}>
        <TextInput style={styles.eventName}  
          placeholder="Nome do Evento"
          placeholderTextColor={'#6B6B6B'}
        />
      </View>

      <View style={styles.eventDate}>
        <TextInput style={styles.eventDate}
          placeholder="Data do Evento(Dia da semana, dd/mm/aaaa)"
          placeholderTextColor={'#6B6B6B'}
        />
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipanteName}
          value={participanteName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList showsVerticalScrollIndicator={false}
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participante 
            key={item}
            name={item}
            onRemove ={() => handleParticipantRemove(item)}/>
        )}

        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda!
            Adicione participantes a sua lista de presença!
          </Text>
        )}
        />
    </View>
  );
}