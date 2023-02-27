let recipe = {
    'title' : 'sườn xào chua ngọt',
    'serving': 2,
    'ingredients' : ['400 g sườn thăn', '4tbsp nước mắm', '5tsp đường', '5 tsp nước cốt chanh','1/3 bát nuocs sôi', 'hành khô, tỏi, ớt, hành lá','2 quả cà chua', 'hành tây(ớt chuông)']             
};

console.log('Tên món ăn :' + recipe.title);

console.log('Khẩu phần ăn :' + recipe.serving);

console.log('Thành phần :');
for(var i = 0; i < recipe.ingredients.length; i++) {
    console.log('-' + recipe.ingredients[i])
}