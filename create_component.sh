#!/bin/bash
# Сохраняем введенное название
component_name_or_path=$1

# Забираем название из пути
component_name=$(basename "$component_name_or_path")

# Условие для заполненного имени
if [ -z "$component_name" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Фиксированный модуль
module="components"

# Дериктории компонента
component_dir="./src/$module/$component_name_or_path"
mkdir -p $component_dir
mkdir -p $component_dir/__tests__
# Шаблонные файлы в дериктории
touch "$component_dir/__tests__/$component_name.test.tsx"
touch "$component_dir/$component_name.tsx"
touch "$component_dir/$component_name.module.css"
touch "$component_dir/index.ts"

# Шаблонный код в файлах
test_tsx_template="describe('$component_name', () => {
  it('should render component correctly', () => {

  })
})"
index_ts_template="export { $component_name } from './$component_name'"
component_tsx_template="import styles from './$component_name.module.css'

interface ${component_name}Props {}

export const ${component_name} = ({}: ${component_name}Props) => {
  return (
    <div className={styles.block}>
      <p>${component_name} Component</p>
    </div>
  )
}
"

# Записываем по файлам
echo "$test_tsx_template" > "$component_dir/__tests__/$component_name.test.tsx"
echo "$component_tsx_template" > "$component_dir/$component_name.tsx"
echo "$index_ts_template" > "$component_dir/index.ts"

echo "Component '$component_name' created in '$module' module."
