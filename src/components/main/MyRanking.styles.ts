import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  myRank: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 500,
    color: '#1C1C1E',
  },
  contentText: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1C1C1E',
  },
  changeTag: {
    fontSize: 14,
    fontWeight: 500,
    color: '#8647F0',
    backgroundColor: '#F7F0FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    lineHeight: 16,
    marginLeft: 12,
  },
});

export default styles;
