import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ThemedView margin>
      <ThemedCard className='mb-5'>
        <ThemedTextInput
          placeholder='Nombre completo'
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })} />
      </ThemedCard>

      <ThemedCard className='mb-5'>
        <ThemedTextInput
          placeholder='Correo electronico'
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(text) => setForm({ ...form, email: text })} />
      </ThemedCard>

      <ThemedCard className='mb-5'>
        <ThemedTextInput
          placeholder='Telefono'
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType='phone-pad'
          onChangeText={(text) => setForm({ ...form, phone: text })} />
      </ThemedCard>

      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
