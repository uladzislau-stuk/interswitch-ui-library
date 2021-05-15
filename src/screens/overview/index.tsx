import React from 'react'
import {
	Pressable,
	SectionList,
	SectionListRenderItem,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {components, solutions} from 'navigation/routes'
import {RootScreenNavigationProp} from 'navigation/root-navigator'

type SectionItem = {
	name: string
	route: string
}

type Section = {
	title: string
	data: SectionItem[]
}[]

const sections: Section = [
	{
		title: 'Components',
		data: Object.values(components).map((route) => ({
			name: route.replace('ROUTE_COMPONENT_', ''),
			route,
		})),
	},
	{
		title: 'Solutions',
		data: Object.values(solutions).map((route) => ({
			name: route.replace('ROUTE_SOLUTION_', ''),
			route,
		})),
	},
]

const Overview = ({
	navigation,
}: RootScreenNavigationProp<'SCREEN_OVERVIEW'>) => {
	const renderListItem: SectionListRenderItem<SectionItem> = ({
		item: {name, route},
	}) => (
		<Pressable
			style={styles.item}
			onPress={() => {
				navigation.navigate(route)
			}}>
			<Text style={styles.title}>{name}</Text>
		</Pressable>
	)

	return (
		<View style={styles.container}>
			<SectionList
				sections={sections}
				keyExtractor={(item) => JSON.stringify(item)}
				renderItem={renderListItem}
				renderSectionHeader={({section: {title}}) => (
					<Text style={styles.header}>{title}</Text>
				)}
			/>
		</View>
	)
}

/* eslint-disable */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 16,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
	},
	header: {
		fontSize: 32,
		paddingVertical: 16,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
	},
})
/* eslint-enable */

export default Overview
