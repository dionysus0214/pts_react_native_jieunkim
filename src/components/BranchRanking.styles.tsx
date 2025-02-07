import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  branchRank: {
    paddingVertical: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1C1C1E',
  },
  linkContainer: {
    flexDirection: 'row',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1C1C1E',
    lineHeight: 22,
    marginRight: 4,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  currentTimeText: {
    fontSize: 12,
    fontWeight: 400,
    color: '#8E8E93',
    marginTop: 4,
  },
});

export default styles;
