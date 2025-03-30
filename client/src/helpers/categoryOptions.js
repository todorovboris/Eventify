export default function categoryOptions(category) {
    const categoriesMap = {
        Music: 'Music',
        Sport: 'Sport',
        Art: 'Art',
        Conference: 'Conference',
        Other: 'Other',
    };

    const categories = Object.keys(categoriesMap).map((value) => ({
        value,
        label: categoriesMap[value],
        selected: value === category ? 'selected' : '',
    }));

    return categories;
}
