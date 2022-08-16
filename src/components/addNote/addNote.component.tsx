import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomModal, TextInput, VStack} from '@src/commons';

import {styles} from './addNote.style';
import {TeamMember} from '../teamMember';

const AddNote = () => (
  <CustomModal
    displayElement={
      <View style={styles.displayElement}>
        <Text>open modal</Text>
      </View>
    }>
    {({onCloseModalHandler}) => (
      <View style={styles.container}>
        <View style={styles.topheader}>
          <Pressable onPress={() => onCloseModalHandler()}>
            <Text style={styles.whitetext}>Cancel</Text>
          </Pressable>

          <Text style={styles.whitetext}>New Note</Text>
          <Text style={styles.whitetext}>Save</Text>
        </View>
        <ScrollView>
          <VStack style={styles.body}>
            <View style={styles.bodytop}>
              <View style={styles.pin}>
                <Text>pin this note</Text>
              </View>
              <TeamMember />
            </View>

            <TextInput
              placeholder="Enter a note here..."
              multiline={true}
              numberOfLines={6}
            />
          </VStack>
        </ScrollView>
      </View>
    )}
  </CustomModal>
);

export {AddNote};
