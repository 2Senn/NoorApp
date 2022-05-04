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
    isDone,
    onToggleCheckbox,
    subject,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
    simultaneousHandlers
  } = props

  /* COLORS */
  const bg = useColorModeValue("#FFF4F1", "rgba(0,0,0,0)")
  const fillColor = useColorModeValue("#000", "#fff")
  const inactiveTextColor = useColorModeValue("muted.500", "muted.400")


  const unfillColor = useToken(
    'colors',
    useColorModeValue("#FEEAE6", "darkBlue.500")
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
          bg="red.600"
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
        borderRadius={30}
        bg={useColorModeValue('#FFF4F1', 'primary.900')}
        shadow = {8}
        space={2}
      >
        <Box width={30} height={30} mr={2}>
          <Pressable onPress={onToggleCheckbox}>
            <BouncyCheckbox
              isChecked={isDone}
              onPress={onToggleCheckbox} 
              fillColor={fillColor}
              unfillColor={unfillColor}
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

export default TaskItem
