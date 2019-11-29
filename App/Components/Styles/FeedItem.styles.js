
import { StyleSheet } from 'react-native';
import { Metrics, Images, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    marginTop: 5,
  },
  item: {
    borderWidth: 1,
    margin: 5,
    marginTop: 3,
    padding: 2,
    borderRadius: 6,
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  lowerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 40,
    marginRight: Metrics.marginHorizontal,
  },
  mainImageContainer: {
    marginTop: Metrics.marginVertical,
  },
  likesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Metrics.marginVertical,
    marginLeft: 200,
    marginRight: Metrics.marginHorizontal,
  },
  descContainer: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  textContainer: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: 50,
  },
  dateContainer: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  profileImage: {
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
    borderRadius: Metrics.icons.medium * 0.5
  },
  profileName: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
  },
  mainImage: {
    width: Metrics.screenWidth,
  },
  mainImageLoader: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  }
});
