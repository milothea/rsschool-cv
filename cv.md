# Liubou Kavaleuskaya

## Location
Warsaw, Poland

## Contact details
+48 572 228 507  
[Telegram](https://t.me/milothea)  
[sauchanka.liubou@gmail.com](mailto:sauchanka.liubou@gmail.com)

## About me
Not geeky frontend dev. In love with what I do for a living.  
My strengths are curiosity, consistency and persistence. There is nothing I can't learn and do.  
Don't have a lot to say about myself :)

> I’m one with the Force. The Force is with me.

## Core skills
* React
* JavaScript
* TypeScript
* Redux
* MobX

## Additional skills
Ant design, Material UI, IBM Carbon, Tailwind CSS, Bootstrap, Node.js, Java, Python, Jest, Enzyme, React testing library, Websockets, Vite, Next.js, Angular, SQL, etc.  

## Code examples
```typescript jsx
const getBreadcrumbsItems = (
    selectedId: string | number,
    treeData: ScaleTreeModel[] | CompetencyTreeModel[],
    onClick: (id: React.Key) => void
): BreadcrumbItemType[] => {
    if (isEmpty(treeData)) return []

    if (!selectedId) {
        return [{
            key: treeData[0]?.id || '',
            title: <span
                className={classNames(styles.currentItem)}
            >
                {treeData[0]?.name || ''}
            </span>,
        }]
    }

    const breadcrumbs: BreadcrumbItemType[] = getFullPath(treeData, selectedId, onClick).reverse()

    return breadcrumbs.map((item, i, items) => {
        if (i < items.length - 1) {
            return {
                ...item,
                title: <span
                    onClick={() => onClick(item.key || '')}
                    className={styles.breadcrumb}
                >
                    {item.title}
                </span>,
            }
        }

        return {
            ...item,
            title: <span className={classNames(styles.currentItem)}>
                {item.title}
            </span>,
        }
    })
}
```
```javascript
function capital(capitals){
    return capitals
        .map( item => {
            return `The capital of ${item['country'] || item['state']} is ${item['capital']}`;
        });
});
```

## Work experience
1. **IBA Group**: August 2021 - to present  
   Software developer
2. **DELIUS-TERRA ALC.**: June 2020 - July 2021  
   Web specialist