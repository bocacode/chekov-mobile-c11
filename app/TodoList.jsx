import { useState, useEffect } from 'react'
import { Center, Box, Heading, VStack, Checkbox, HStack, Text } from 'native-base'

export default function TodoList({ user }) {

  const [todoItems, setTodoItems] = useState()

  useEffect(() => {
    if(user) {
      fetch(`https://chekov-api-c11.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
  }, [user])

  return (
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4} mt={4}>
          {!todoItems
            ? <Text fontSize="xl" color="coolGray.200" textAlign="center">Loading...</Text>
            : todoItems.map(item => (
              <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                <Checkbox
                  aria-label={item.title}
                  isChecked={item.done} />
                <Text
                  fontSize={18}
                  mx={2}
                  strikeThrough={item.done}
                  color={item.done ? 'coolGray.500' : 'coolGray.100'}
                  textAlign="left"
                  width="100%"
                
                >{item.title}</Text>
              </HStack>
            ))
          }
        </VStack>
      </Box>
    </Center>
  )
}
