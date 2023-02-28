onEvent('block.tags', (event) => {
    event
        .get('create:fan_transparent')
        .add(/bars/)
        .add(/chain_link/)
        .add(/leaves/)
        .add(/scaffolding_standard/)
        .add(/scaffolding_grate/)
        .add('immersiveengineering:metal_ladder_alu')
        .add('immersiveengineering:metal_ladder_steel')
        .add('farmersdelight:safety_net')
        .add('darkutils:item_grate')
        .add('minecraft:scaffolding')
        .add('minecraft:chain')
});
