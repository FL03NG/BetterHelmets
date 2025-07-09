const BetterHelmetsCombined = {
    mod: "BetterHelmets_Combined",
    version: "1.5.0",
    author: "FL03NG",
    description: "Buff helmets: armor, weight, deafness, flea & trader prices (null fix).",
    postDBLoad(container) {
        const logger = container.resolve("WinstonLogger");
        const database = container.resolve("DatabaseServer");
        const items = database.getTables().templates.items;
        const traders = database.getTables().traders;
        const prices = database.getTables().templates.prices;

        const helmets = [
            { name: "PSh-97 DJETA Riot Helmet", id: "5c0d2727d174af02a012cf58", fleaMult: 3, traderMult: 3, weightMult: 1.2, deafMult: 0.5 },
            { name: "PSh-97 DJETA Top", id: "657ba6c3c6f689d3a205b857", newArmor: 3 },
            { name: "PSh-97 DJETA Nape", id: "657ba737b7e9ca9a02045bf6", newArmor: 3 },
            { name: "PSh-97 DJETA Ears", id: "657ba75e23918923cb0df573", newArmor: 3 },

            { name: "Galvion Caiman Hybrid Helmet (Grey)", id: "5f60b34a41e30a4ab12a6947", fleaMult: 3, traderMult: 3, weightMult: 1.2, deafMult: 0.5 },
            { name: "Caiman Top", id: "657bbad7a1c61ee0c3036323", newArmor: 4 },
            { name: "Caiman Nape", id: "657bbb31b30eca9763051183", newArmor: 4 },

            { name: "SSSh-94 SFERA-S Helmet", id: "657bb70486c7f9ef7a009936", fleaMult: 4, traderMult: 4, weightMult: 1.2, deafMult: 0.7 },
            { name: "SFERA-S Top", id: "657bb70486c7f9ef7a009936", newArmor: 4 },
            { name: "SFERA-S Nape", id: "657bb79ba1c61ee0c303631a", newArmor: 4 },
            { name: "SFERA-S Ears", id: "657bb7d7b30eca9763051176", newArmor: 4 },

            { name: "BNTI LShZ-2DTM Helmet (Black)", id: "5d6d3716a4b9361bc8618872", fleaMult: 3, traderMult: 3, weightMult: 1.3, deafMult: 0.7 },
            { name: "LShZ-2DTM Top", id: "657fa009d4caf976440afe3a", newArmor: 5 },
            { name: "LShZ-2DTM Nape", id: "657fa04ac6679fefb3051e24", newArmor: 5 },
            { name: "LShZ-2DTM Ears", id: "657fa07387e11c61f70bface", newArmor: 5 },

            { name: "Maska-1SCh Bulletproof Helmet (Olive Drab)", id: "5c091a4e0db834001d5addc8", fleaMult: 2, traderMult: 2, weightMult: 1.3, deafMult: 0.7 },
            { name: "Maska-1SCh Olive Drab Top", id: "6571133d22996eaf11088200", newArmor: 5 },
            { name: "Maska-1SCh Olive Drab Nape", id: "6571138e818110db4600aa71", newArmor: 5 },
            { name: "Maska-1SCh Olive Drab Ears", id: "657112fa818110db4600aa6b", newArmor: 5 },

            { name: "Maska-1SCh Bulletproof Helmet (Killa Edition)", id: "5c0e874186f7745dc7616606", fleaMult: 2, traderMult: 2, weightMult: 1.3, deafMult: 0.7 },
            { name: "Maska-1SCh Killa Top", id: "6571133d22996eaf11088200", newArmor: 5 },
            { name: "Maska-1SCh Killa Nape", id: "6571138e818110db4600aa71", newArmor: 5 },
            { name: "Maska-1SCh Killa Ears", id: "657112fa818110db4600aa6b", newArmor: 5 },

            { name: "Vulkan-5 LShZ-5 Bulletproof Helmet (Black)", id: "5ca20ee186f774799474abc2", fleaMult: 5, traderMult: 5, weightMult: 1.4, deafMult: 0.7 },
            { name: "Vulkan-5 Top", id: "657bbe73a1c61ee0c303632b", newArmor: 6 },
            { name: "Vulkan-5 Nape", id: "657bbed0aab96fccee08be96", newArmor: 6 },
            { name: "Vulkan-5 Ears", id: "657bbefeb30eca9763051189", newArmor: 6 },

            { name: "Rys-T Bulletproof Helmet (Black)", id: "5f60c74e3b85f6263c145586", fleaMult: 5, traderMult: 5, weightMult: 1.4, deafMult: 0.7 },
            { name: "Rys-T Top", id: "657bc285aab96fccee08bea3", newArmor: 6 },
            { name: "Rys-T Nape", id: "657bc2c5a1c61ee0c3036333", newArmor: 6 },
            { name: "Rys-T Ears", id: "657bc2e7b30eca976305118d", newArmor: 6 },
        ];

        const helmetAttachments = [
            { name: "Galvion Caiman Hybrid Ballistic Mandible Guard", id: "5f60c076f2bcbb675b00dac2", newArmor: 4, priceMult: 3 },
            { name: "Ops-Core FAST Gunsight Mandible", id: "5a16ba61fcdbcb098008728a", newArmor: 4, priceMult: 4 }, //her
            { name: "Galvion Caiman Hybrid Ballistic Applique", id: "5f60b85bbdb8e27dee3dc985", newArmor: 5, priceMult: 2 },
            { name: "Diamond Age NeoSteel helmet ballistic mandible", id: "6570a88c8f221f3b210353b7", newArmor: 4, priceMult: 3 },
            { name: "Team Wendy EXFIL Ear Covers (Black)", id: "5e00cfa786f77469dc6e5685", newArmor: 4, priceMult: 2 },
            { name: "Team Wendy EXFIL Ear Covers (Coyote Brown)", id: "5e01f31d86f77465cf261343", newArmor: 4, priceMult: 2 },
            { name: "Crye Precision AirFrame Ears", id: "5c1793902e221602b21d3de2", newArmor: 4, priceMult: 3 },
            { name: "Ops-Core FAST Side Armor", id: "5a16badafcdbcb001865f72d", newArmor: 4, priceMult: 3 }

        ];

        const visorAndEars = [
            { name: "Ops-Core FAST Visor", id: "5a16b672fcdbcb001912fa83", newArmor: 3, priceMult: 2 },
            { name: "Galvion Caiman Fixed Arm Visor", id: "5f60bf4558eff926626a60f2", newArmor: 4, priceMult: 2 },
            { name: "Tac-Kek Heavy Trooper mask for Ops-Core-type helmets", id: "5ea058e01dbce517f324b3e2", newArmor: 3, priceMult: 2 },
            { name: "Ops-Core FAST multi-hit ballistic face shield", id: "5a16b7e1fcdbcb00165aa6c9", newArmor: 4, priceMult: 2 },
            { name: "Team Wendy EXFIL Ballistic face shield (Black)", id: "5e00cdd986f7747473332240", newArmor: 4, priceMult: 2 },
            { name: "Team Wendy EXFIL Ballistic face shield (Coyote Brown)", id: "5e01f37686f774773c6f6c15", newArmor: 4, priceMult: 2 },
            { name: "Vulkan-5 helmet face shield", id: "5ca2113f86f7740b2547e1d2", newArmor: 5, priceMult: 3 }, //her
            { name: "Rys-T face shield", id: "5f60c85b58eff926626a60f7", newArmor: 6, priceMult: 3 }, //her
            { name: "ZSh-1 Face Shield", id: "5aa7e3abe5b5b000171d064d", newArmor: 4, priceMult: 2 }
        ];

        const masks = [
            { name: "Death Knight Mask", id: "62963c18dbc8ab5f0d382d0b", newArmor: 3, priceMult: 2 },
            { name: "Death Shadow Lightweight Armored Mask", id: "6570aead4d84f81fd002a033", newArmor: 3, priceMult: 2 },
            { name: "Tagilla's Welding Mask 'Gorilla'", id: "60a7ad2a2198820d95707a2e", newArmor: 6, priceMult: 2 },
            { name: "Tagilla's Welding Mask 'UBEY'", id: "60a7ad3a0c5cb24b0134664a", newArmor: 6, priceMult: 2 }
        ];



        for (const helmet of helmets) {
            const item = items[helmet.id];

            if (!item || item._props.__modded) {
                continue; //spring over hvis allerede ændret
            }
            item._props.__modded = true; //markér som modded

            if (item) {
                //Armor
                if (helmet.newArmor !== undefined && typeof helmet.newArmor === "number") {
                    item._props.armorClass = helmet.newArmor;
                }

                //Weight
                if (helmet.weightMult && typeof item._props.Weight === "number") {
                    item._props.Weight = parseFloat((item._props.Weight * helmet.weightMult).toFixed(2));
                } else if (helmet.weightMult && item._props.Weight === null) {
                    //set dummy weight to avoid JSON error
                    item._props.Weight = 0.1;
                    logger.info(`${helmet.name} had null Weight. Set to 0.1kg`);
                }

                // Deafness
                if (helmet.deafMult && typeof item._props.DeafStrength === "number") {
                    item._props.DeafStrength *= helmet.deafMult;
                }

                // Flea Price (main helmets only)
                if (helmet.fleaMult && prices[helmet.id] !== undefined) {
                    prices[helmet.id] = Math.round(prices[helmet.id] * helmet.fleaMult);
                }

                // Trader Price (main helmets only)
                if (helmet.traderMult) {
                    for (const traderID in traders) {
                        const trader = traders[traderID];
                        if (trader.assort?.items) {
                            for (const entry of trader.assort.items) {
                                if (entry._tpl === helmet.id && trader.assort.barter_scheme[entry._id]) {
                                    const barter = trader.assort.barter_scheme[entry._id][0][0];
                                    barter.count = Math.round(barter.count * helmet.traderMult);
                                }
                            }
                        }
                    }
                }
            }



            for (const attachment of helmetAttachments) {
                const item = items[attachment.id];

                if (!item || item._props.__modded) {
                    continue; //spring over hvis allerede ændret
                }
                item._props.__modded = true; //markér som modded

                if (item) {
                    //Armor Class
                    const oldArmor = item._props.armorClass;
                    item._props.armorClass = attachment.newArmor;

                    //Price (Flea) 
                    const oldPrice = prices[attachment.id] || 10000; //default price fallback
                    prices[attachment.id] = Math.round(oldPrice * attachment.priceMult);

                    //Trader Prices
                    for (const traderID in traders) {
                        const trader = traders[traderID];
                        if (trader.assort && trader.assort.items) {
                            for (const itemEntry of trader.assort.items) {
                                if (itemEntry._tpl === attachment.id && trader.assort.barter_scheme[itemEntry._id]) {
                                    const barterEntry = trader.assort.barter_scheme[itemEntry._id][0][0];
                                    const oldTraderPrice = barterEntry.count;
                                    barterEntry.count = Math.round(oldTraderPrice * attachment.priceMult);
                                    logger.info(`Trader price: ${attachment.name} → ${oldTraderPrice}₽ → ${barterEntry.count}₽`);
                                }
                            }
                        }
                    }

                    logger.info(`${attachment.name}: Armor ${oldArmor}→${attachment.newArmor}, Flea Price ${oldPrice}₽→${prices[attachment.id]}₽`);
                } else {
                    logger.error(`Attachment not found: ${attachment.name} (${attachment.id})`);
                }
            }

            for (const visor of visorAndEars) {
                const item = items[visor.id];

                if (!item || item._props.__modded) {
                    continue; //spring over hvis allerede ændret
                }
                item._props.__modded = true; //markér som modded

                if (item) {
                    //Armor Class
                    const oldArmor = item._props.armorClass;
                    item._props.armorClass = visor.newArmor;

                    //Flea Price
                    const oldPrice = prices[visor.id] || 10000; //default price fallback
                    prices[visor.id] = Math.round(oldPrice * visor.priceMult);

                    //Trader Prices
                    for (const traderID in traders) {
                        const trader = traders[traderID];
                        if (trader.assort && trader.assort.items) {
                            for (const itemEntry of trader.assort.items) {
                                if (itemEntry._tpl === visor.id && trader.assort.barter_scheme[itemEntry._id]) {
                                    const barterEntry = trader.assort.barter_scheme[itemEntry._id][0][0];
                                    const oldTraderPrice = barterEntry.count;
                                    barterEntry.count = Math.round(oldTraderPrice * visor.priceMult);
                                    logger.info(`Trader price: ${visor.name} → ${oldTraderPrice}₽ → ${barterEntry.count}₽`);
                                }
                            }
                        }
                    }

                    logger.info(`${visor.name}: Armor ${oldArmor}→${visor.newArmor}, Flea Price ${oldPrice}₽→${prices[visor.id]}₽`);
                } else {
                    logger.error(`Visor/Ear not found: ${visor.name} (${visor.id})`);
                }

            }
            for (const mask of masks) {
                const item = items[mask.id];

                if (!item || item._props.__modded) {
                    continue; //spring over hvis allerede ændret
                }
                item._props.__modded = true; //markér som modded

                if (item) {
                    //Armor
                    const oldArmor = item._props.armorClass;
                    item._props.armorClass = mask.newArmor;

                    //Weight
                    const oldWeight = item._props.Weight;

                    //Flea Price
                    if (prices[mask.id] !== undefined) {
                        const oldFleaPrice = prices[mask.id] || 10000; //default price fallback
                        prices[mask.id] = Math.round(oldFleaPrice * mask.priceMult);
                        logger.info(`Flea price: ${mask.name} → ${oldFleaPrice}₽ → ${prices[mask.id]}₽`);
                    } else {
                        logger.info(`Flea price not found for ${mask.name}, skipping.`);
                    }

                    //Trader Prices
                    for (const traderID in traders) {
                        const trader = traders[traderID];
                        if (trader.assort && trader.assort.items) {
                            for (const itemEntry of trader.assort.items) {
                                if (itemEntry._tpl === mask.id && trader.assort.barter_scheme[itemEntry._id]) {
                                    const barterEntry = trader.assort.barter_scheme[itemEntry._id][0][0];
                                    const oldTraderPrice = barterEntry.count;
                                    barterEntry.count = Math.round(oldTraderPrice * mask.priceMult);
                                    logger.info(`Trader price: ${mask.name} → ${oldTraderPrice}₽ → ${barterEntry.count}₽`);
                                }
                            }
                        }
                    }

                    logger.info(` ${mask.name}: Armor ${oldArmor}→${mask.newArmor}, Weight ${oldWeight}kg`);
                } else {
                    logger.error(`Could not find ${mask.name} (${mask.id}) in database!`);
                }
            }
        }
    }
}


    

module.exports = { mod: BetterHelmetsCombined };
