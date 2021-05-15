import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack'

import {ButtonPlayground, TypographyPlayground} from 'components'
import {Overview} from 'screens'

export type RootStackParamList = {
	SCREEN_OVERVIEW: undefined
	COMPONENT_BUTTON_PLAYGROUND: undefined
	COMPONENT_TYPOGRAPHY_PLAYGROUND: undefined
	SOLUTION_EXAMPLE_PLAYGROUND: undefined
	// to avoid type assertion item.route as keyof typeof routes
	[k: string]: undefined
}

export type RootScreenNavigationProp<
	ScreenName extends keyof RootStackParamList,
	ScreenProps = unknown,
> = ScreenProps extends Record<string, unknown>
	? ScreenProps & StackScreenProps<RootStackParamList, ScreenName>
	: StackScreenProps<RootStackParamList, ScreenName>

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<RootStack.Navigator mode="modal">
				<RootStack.Screen name="SCREEN_OVERVIEW" component={Overview} />
				<RootStack.Screen
					name="COMPONENT_BUTTON_PLAYGROUND"
					component={ButtonPlayground}
				/>
				<RootStack.Screen
					name="COMPONENT_TYPOGRAPHY_PLAYGROUND"
					component={TypographyPlayground}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	)
}
