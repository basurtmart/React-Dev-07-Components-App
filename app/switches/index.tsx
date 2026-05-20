import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwich from '@/presentation/shared/ThemedSwich';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [stated, setStated] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={stated.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setStated({ ...stated, isActive: value })}
          value={stated.isActive}
        /> */}
        <ThemedSwich
          text='Activo'
          value={stated.isActive}
          onValueChangenge={(value) => setStated({ ...stated, isActive: value })}
          className='mb-4' />

        <ThemedSwich
          text='Hambriento'
          value={stated.isHungry}
          onValueChangenge={(value) => setStated({ ...stated, isHungry: value })}
          className='mb-4' />

        <ThemedSwich
          text='Contento'
          value={stated.isHappy}
          onValueChangenge={(value) => setStated({ ...stated, isHappy: value })}
          className='mb-4' />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
