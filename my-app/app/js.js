import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';

const js = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost/tu_directorio/login.php', { email, password })
            .then(response => {
                if (response.data.success) {
                    Alert.alert("Éxito", response.data.message);
                    // Navegar a otra pantalla o guardar estado
                } else {
                    Alert.alert("Error", response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Error", "Hubo un problema con la conexión.");
            });
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Iniciar sesión" onPress={handleLogin} />
        </View>
    );
};

export default js;
