import React from 'react';

import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {Avatar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {storeAlbumRecords} from '../../store/actions/albumsActions';

import {albumApi} from '../../network/api';

import client from '../../network/client';

import AppText from '../../components/atoms/appText/appText';
import AppButton from '../../components/molecules/appButton/appButton';
import {paginate} from '../../utils/commonFunctions';
import styles from './home.styles';

const Home = () => {
  const dispatch = useDispatch();

  const [albumList, setAlbumList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const keyExtractor = ({id}) => id;

  const {data, isSuccess} = useQuery('albums', () => client().get(albumApi));

  useEffect(() => {
    if (isSuccess && data?.data?.length) {
      const paginateData = paginate(data?.data, 5, 1);
      setAlbumList(paginateData);
      dispatch(storeAlbumRecords(paginateData));
    }
  }, [isSuccess, data, dispatch]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.albumItem}>
        <Avatar.Image size={100} source={{uri: item.url}} />
        <View>
          <AppText numberLines={2} style={styles.itemTextStyle}>
            {item.title}
          </AppText>
        </View>
      </View>
    );
  };

  const onNextPage = () => {
    setPageCount(prevState => {
      setAlbumList(paginate(data?.data, 5, prevState + 1));
      return prevState + 1;
    });
  };

  const noDataRecord = () => {
    return <AppText style={styles.textStyle}>No Records Found</AppText>;
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.textStyle}>Best Albums List</AppText>
      <FlatList
        renderItem={renderItem}
        data={albumList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ListEmptyComponent={noDataRecord}
      />
      <AppButton style={styles.buttonStyle} label="Next" onPress={onNextPage} />
    </View>
  );
};

export default Home;
