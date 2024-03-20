import { useState, useRef } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';

import { styles } from './styles';

import Product from '../../components/product';
import Category from '../../components/category';

import { PRODUCTS, CATEGORIES } from '../../utils/data';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <SectionList
        ref={sectionListRef}
        sections={PRODUCTS}
        keyExtractor={(item) => item}
        stickySectionHeadersEnabled={false}
        renderItem={() => <Product />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionContainer}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}
