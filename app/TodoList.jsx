import { useState, useEffect } from 'react'
import { Center, Box, VStack, Checkbox, HStack, Text, Button, Spinner } from 'native-base'
import TodoHeader from './TodoHeader'

export default function TodoList({ user }) {

  const [todoItems, setTodoItems] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(user) {
      fetch(`https://chekov-api-c11.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
  },[user]);

  // CRUD: UPDATE
  const handleItemUpdate = (id, done) => {
    const itemUpdate = { id, done: !done }
    setLoading(true)
    
    fetch(`https://chekov-api-c11.web.app/tasks/${user.uid}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(itemUpdate)
    })
    .then( res => res.json() )
    .then( data => {
      setTodoItems(data)
    })
    .catch(alert)
    .finally(() => setLoading(false))
  }

  // CRUD: DELETE
  const handleItemDelete = (id) => {
    const itemDelete = { id }
    setLoading(true)

    fetch(`https://chekov-api-c11.web.app/tasks/${user.uid}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(itemDelete)
    })
    .then( res => res.json())
    .then( data => {
      setTodoItems(data)
    })
    .catch(alert)
    .finally(() => setLoading(false))
  }

  return (
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4} mt={4}>
          <TodoHeader user={user} setLoading={setLoading} setTodoItems={setTodoItems} />
          {!todoItems
            ? <Text fontSize="xl" color="coolGray.200" textAlign="center">Loading...</Text>
            : loading
              ? <Spinner size="lg" color="coolGray.200" />
              : todoItems.map(item => {
                  const thisItemId = item.id
                  const thisItemDone = item.done

                  return (
                  <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                    
                    <Checkbox
                      aria-label={item.title}
                      isChecked={item.done}
                      onChange={ () => handleItemUpdate(thisItemId, thisItemDone) } />
                    
                    <Text
                      fontSize={18}
                      onPress={ () => handleItemUpdate(thisItemId, thisItemDone) }
                      mx={2}
                      strikeThrough={item.done}
                      color={item.done ? 'coolGray.500' : 'coolGray.100'}
                      textAlign="left"
                      flex={1}
                    >{item.title}</Text>

                    <Button
                      variant="ghost"
                      colorTheme="secondary"
                      size="xs"
                      onPress={ () => handleItemDelete(thisItemId) }>🗑️</Button>
                  </HStack>
                )})
          }
        </VStack>
      </Box>
    </Center>
  )
}
