import { Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export default function Category({
  title,
  isSelected,
  ...rest
}: CategoryProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selected]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
