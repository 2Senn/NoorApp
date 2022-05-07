import { Box, HStack, Icon, Input, Pressable, useColorModeValue, useToken, VStack } from "native-base"
import React, { useCallback, useState } from "react"
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TouchableOpacity} from 'react-native'
import { View, Text } from "native-base"
import { BlurView } from "expo-blur"
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AnimatedTask from './animated-task'
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { PanGestureHandlerProps } from "react-native-gesture-handler"
import SwipableView from './swipe-view'
import AnimatedTaskLabel from "./animated-task"
import { Feather } from "@expo/vector-icons"

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean
  isDone: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
  subject: string
}

export const TaskItem = (props: Props) => {
  
  //get props
  const {
    isEditing,
    onFinishEditing,
    onPressLabel,
    isDone,
    subject,
    onToggleCheckbox,
    simultaneousHandlers,
    onRemove,
    onChangeSubject,
  } = props

  /* COLORS */
  const bg = useColorModeValue("#FFF4F1", "rgba(0,0,0,0)")
  const fillColor = useColorModeValue("#000", "#fff")
  const borderC = useColorModeValue("#442C2E", "#000")

  const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

  const unfillColor = useToken(
    'colors',
    useColorModeValue("primary.200", "darkBlue.500")
  )
  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600')
  )
  
const handleChangeSubject = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(event.nativeEvent.text)
    },
    [onChangeSubject]
  )

  
  return (
    <SwipableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="100%"
          h="100%"
          borderRadius={30}
          bg="red.700"
          justifyContent="center"
          pr={4}
          alignItems="flex-end"
        >
          <Icon 
            color="white" 
            as={
              <Feather name="trash" />
            } 
            size="sm" 
          />
        </Box>
      }
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue( '#e1a998', 'primary.900')}
        borderLeftWidth={4}
        borderTopRightRadius={15}
        borderBottomRightRadius={15}
        borderBottomColor={"black"}
        space={2}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <BouncyCheckbox
              isChecked={isDone}
              onPress={onToggleCheckbox} 
              fillColor={fillColor}
              unfillColor={unfillColor}
              iconStyle={{
                borderColor: borderC
              }}
              bounceFriction={1}
            />
          </Pressable>
        </Box>
        {isEditing ? (
          <Input
            placeholder="Task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            strikethrough={isDone}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipableView>
  )
}

const styles=StyleSheet.create({
  boxNeo: {
    backgroundColor: '#e6a089',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 8,
    shadowOpacity: 1,
    shadowColor: '#ad8275',

  }
})

export default TaskItem
