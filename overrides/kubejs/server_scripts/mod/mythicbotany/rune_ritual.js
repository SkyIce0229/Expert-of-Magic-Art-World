onEvent('recipes', (event) => {
    recipes = [
        {
            group: 'rune_rituals',
            center: { item: 'mythicbotany:fimbultyr_tablet' },
            runes: [
                { item: '#botania:runes/midgard', pos: { x: -2, z: -2 } },
                { item: '#botania:runes/midgard', pos: { x: 2, z: 2 } },
                { item: '#botania:runes/helheim', pos: { x: 2, z: -2 } },
                { item: '#botania:runes/helheim', pos: { x: -2, z: 2 } },
                { item: '#botania:runes/summer', pos: { x: -1, z: -3 } },
                { item: '#botania:runes/summer', pos: { x: 1, z: 3 } },
                { item: '#botania:runes/summer', pos: { x: -3, z: -1 } },
                { item: '#botania:runes/summer', pos: { x: 3, z: 1 } },
                { item: '#botania:runes/fire', pos: { x: 1, z: -3 } },
                { item: '#botania:runes/fire', pos: { x: -1, z: 3 } },
                { item: '#botania:runes/fire', pos: { x: 3, z: -1 } },
                { item: '#botania:runes/fire', pos: { x: -3, z: 1 } }
            ],
            consume_runes: false,
            mana: 4000000,
            ticks: 200,
            inputs: [
                Item.of('botania:ender_dagger', '{Damage:0}').weakNBT(),
                'bloodmagic:looting_anointment_l',
                'botania:flask',
                'naturesaura:token_rage'
            ],
            outputs: ['mythicbotany:kvasir_blood'],
            special_input: 'mythicbotany:wandering_trader',
        },
        {
            group: 'rune_rituals',
            center: { item: 'mythicbotany:fimbultyr_tablet' },
            runes: [
                { item: '#botania:runes/midgard', pos: { x: -3, z: 3 } },
                { item: '#botania:runes/midgard', pos: { x: 2, z: 2 } },
                { item: '#botania:runes/helheim', pos: { x: 2, z: -2 } },
                { item: '#botania:runes/helheim', pos: { x: -2, z: 2 } },
                { item: '#botania:runes/summer', pos: { x: -1, z: -3 } },
                { item: '#botania:runes/summer', pos: { x: 1, z: 3 } },
                { item: '#botania:runes/summer', pos: { x: -3, z: -1 } },
                { item: '#botania:runes/summer', pos: { x: 3, z: 1 } },
                { item: '#botania:runes/fire', pos: { x: 1, z: -3 } },
                { item: '#botania:runes/fire', pos: { x: -1, z: 3 } },
                { item: '#botania:runes/fire', pos: { x: 3, z: -1 } },
                { item: '#botania:runes/fire', pos: { x: -3, z: 1 } }
            ],
            consume_runes: true,
            mana: 8000000,
            ticks: 200,
            inputs: [
                Item.of('botania:ender_dagger', '{Damage:0}').weakNBT(),
                'bloodmagic:looting_anointment_l',
                'botania:flask',
                'naturesaura:token_rage'
            ],
            outputs: ['mythicbotany:kvasir_blood'],
            special_input: 'mythicbotany:wandering_trader',
        },
    ];

    recipes.forEach((recipe) => {
        let rune_inputs = [];

        recipe.runes.forEach((rune) => {
            rune_inputs.push({
                rune: Item.of(rune.item).toJson(),
                x: rune.pos.x,
                z: rune.pos.z,
                consume: recipe.consume_runes
            });
        });

        recipe.type = 'mythicbotany:rune_ritual';
        recipe.runes = rune_inputs;
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.outputs = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe)/*.id(recipe.id)*/;
    });
});
