import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  header: {
    height: height * 0.068,
    backgroundColor: '#30597D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    padding: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },

  headerDescriptionContainer: {
    padding: 10,
  },
  headerDescriptionLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    backgroundColor: '#5D11AB',
    padding: 10,
    borderRadius: 5,
  },
  logoText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
  logoDescriptionText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  headerDescriptionContent: {
    paddingVertical: 10,
  },
  descriptionParagraph: {
    fontSize: 13,
    fontWeight: '600',
  },
  dayLeftText: {
    paddingTop: 5,
    fontSize: 13,
    fontWeight: '600',
  },
  invoiceText: {
    paddingTop: 5,
    color: '#2979B8',
    fontWeight: '600',
    fontSize: 13,
  },
  jobText: {
    paddingTop: 5,
    color: '#2979B8',
    fontWeight: '600',
    fontSize: 13,
  },
  hrline: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    width: '100%',
  },
  menuItem: {},
  menuContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  menuLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {},
  menuText: {
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 15,
  },
  badgeText: {
    backgroundColor: '#E35540',
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF',
  },
  sectionDividerLabel: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#EAF3FA',
  },
  sectionText: {
    color: '#123450',
    fontWeight: '500',
    fontSize: 15,
  },
  extraGapHeight: {
    height: 50,
  },
});

export {styles};
