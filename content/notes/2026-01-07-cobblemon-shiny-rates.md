---
title: Influencing Cobblemon shiny rates
tags:
  - cobblemon
  - code
  - kotlin
slug: cobblemon-shiny-rates
date: 2026-01-07
---

Sometimes you want to modify ✨*shiny*✨ rate of species you work with.

Use-cases may wary. The usual case is when you are trying to give player the species via other means besides spawning.

The code in this note is **Kotlin**. Your experience with **Java** may vary. Don't be afraid to ask questions in Cobblemon discord's #programming channel


Let's instantiate `ShinyChanceCalculationEvent`:
```kotlin
val pokemon = PokemonProperties.parse('zubat').create()
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
```

It accepts only 2 parameters:
* **shinyRate** - `Float` - Base chance, fetched from mod config
* **pokemon** - `Pokemon` - Initialized instance of species

Now, that we created event instance, we are ready to so some silly stuff, because instance exposes us a couple of handy functions.

First one allows us to apply flat modifier to event chance
```kotlin
event.addModifier(modifier: Float)
```

Second one allows us to apply a callable function to modify chance.
We expect 3 arguments to be passed in it:
* `Float` - Shiny rate
* `ServerPlayer` - Nullable player 
* `Pokemon` - The species instance we will be calculating chance for
```kotlin
event.addModificationFunction(function: (Float, ServerPlayer?, Pokemon) -> Float)
```

Those handy helpers are our bread and staple.
For example if i want to apply flat bonus i would do it this way:
```kotlin
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)
event.addModifier(100f) // add flat 100 increase
```

The callable will allow us to be more flexible:
```kotlin
var shinyRate = Cobblemon.config.shinyRate
val event = ShinyChanceCalculationEvent(shinyRate, pokemon)

event.addModificationFunction { chance, player, pokemon -> 
  // for example in that case i want to
  // modify rate if pokemon holds a diamond

  // early bail if criteria not met
  if (pokemon.heldItem().item != Items.DIAMOND) {
    return@addModificationFunction chance
  }

  // return modified chance
  return@addModificationFunction (chance + 100f)
}
```

Now that we are done modifying our chances, let's assemble it all together and emit an event:
```kotlin
CobblemonEvents.SHINY_CHANCE_CALCULATION.post(event) { evt ->
  pokemon.shiny = evt.
}
```