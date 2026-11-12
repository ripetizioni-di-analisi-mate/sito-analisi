import { course as C } from '../lesson.mjs';
import { unit as U, scienceFramework, texasScience } from './material.mjs';

const sources = [scienceFramework, texasScience];

export const lifeAndMatter = [
  C('hs-biology', 'Biology', 'Study cells, energy, inheritance, evolution and ecosystems using evidence and simple models.', 'Basic reading of tables and percentages.', sources, [
    U('Cells, membranes and the cell cycle',
      'Cells maintain internal conditions through a selectively permeable membrane. Water can move across the membrane by osmosis. During mitosis, copied chromosomes are separated into daughter nuclei.',
      [
        ['A cell model begins at 12.0 g and ends at 13.5 g in dilute solution. Find the percentage mass change.', 'The mass increases by 1.5 g. Relative to the starting mass, the increase is $100(1.5/12)=12.5$%. The gain is consistent with water entering the model.'],
        ['A microscope sample contains 90 cells in interphase and 10 in mitosis. Explain the limit of estimating the duration of mitosis from this snapshot.', 'The mitotic fraction is 10%. It estimates the fraction of time only if the sample represents a steadily cycling population and cells were sampled without bias.'],
      ],
      [
        ['Calculate mass change', 'A cell model falls from 20 g to 18 g. Find the signed percent mass change. Enter the number without a percent sign.', 'The change is $-2$ g. Dividing by 20 g and multiplying by 100 gives $-10$%.', '-10'],
        ['Cell cycle counts', 'Of 80 observed cells, 12 are in mitosis. Find the percentage in mitosis.', '$100(12/80)=15$%.', '15'],
        ['Explain osmosis', 'A cell with a higher internal solute concentration than its surroundings gains water. Explain the direction of net movement.', 'For a membrane permeable to water and effectively impermeable to that solute, water moves net toward the side with the higher effective solute concentration.'],
      ],
      ['Which structure controls the passage of many substances between the cell and its surroundings?', 'Cell membrane', ['Nucleolus', 'Chromosome', 'Ribosome'], 'The membrane is the boundary across which substances enter or leave the cell.']),
    U('Photosynthesis and cellular respiration',
      'Photosynthesis uses light energy to build sugars from carbon dioxide and water. Cellular respiration transfers chemical energy from food to ATP. Matter cycles through these processes while energy is transferred and ultimately dissipated as heat.',
      [
        ['A plant in light consumes 8 units of carbon dioxide by photosynthesis and releases 3 units by respiration. Find the net change in its surroundings.', 'The surroundings lose 8 units and gain 3, so the net change is $-5$ units. The plant has net uptake of 5 units.'],
        ['Two otherwise identical aquatic plant setups differ in light level. Oxygen rises faster in the brighter setup. Explain a reasonable interpretation.', 'Oxygen is released during photosynthesis. Faster accumulation under otherwise comparable conditions supports increased net photosynthesis. Respiration also affects the oxygen reading.'],
      ],
      [
        ['Net oxygen exchange', 'Photosynthesis releases 9 units of oxygen and respiration consumes 4. Enter net oxygen released.', 'Subtract consumption from production to get $5$ units.', '5'],
        ['Compare measured rates', 'Oxygen rises by 6 units in 3 minutes. Enter the average net rise per minute.', 'Divide the change by elapsed time, $6/3=2$.', '2'],
        ['Matter and energy', 'A student says the mass of new plant tissue comes from sunlight. Identify a source of carbon atoms in the tissue.', 'Carbon atoms come mainly from carbon dioxide. Light supplies energy for the chemical processes that build sugars.'],
      ],
      ['Which change is directly consistent with a higher net photosynthesis rate in an illuminated aquatic plant?', 'A faster increase in dissolved oxygen with the other conditions held constant.',
        ['A faster decrease in dissolved oxygen with the other conditions held constant.', 'The plant receives no light.', 'The solution is always exactly the same temperature.'],
        'Oxygen is a product of photosynthesis, and its net accumulation reflects production minus use.']),
    U('DNA, gene expression and inheritance',
      'Genes are regions of DNA whose information can contribute to a functional product. Many traits reflect both genes and environment. In a simple one-gene model, a heterozygote with genotype $Aa$ can pass either allele to a gamete.',
      [
        ['For an $Aa$ by $Aa$ cross, list the possible genotypes and their probabilities.', 'Each parent contributes $A$ or $a$ with equal probability. The four combinations are $AA,Aa,Aa,aa$, giving probabilities $1/4$, $1/2$ and $1/4$.'],
        ['Two identical plant cuttings grow to different heights under different light levels. Explain how this is possible.', 'Their DNA can be the same while environmental conditions differ. Height is a phenotype affected by both genetic information and conditions during growth.'],
      ],
      [
        ['A test cross', 'In a cross $Aa$ by $aa$, find the probability of $aa$.', 'The $aa$ parent contributes $a$. The other parent contributes $a$ half the time, so the probability is $1/2$.', '1/2'],
        ['Dominant phenotype', 'Assume complete dominance. In an $Aa$ by $Aa$ cross, find the probability of the dominant phenotype.', 'Both $AA$ and $Aa$ show the dominant phenotype. Their probabilities sum to $3/4$.', '3/4'],
        ['DNA and proteins', 'Explain why a DNA base substitution can affect a protein without changing the chromosome count.', 'A substitution changes a base within a DNA sequence. It may change a codon and the resulting amino acid while leaving the number of chromosomes the same.'],
      ],
      ['Which process makes an RNA copy from a DNA template?', 'Transcription', ['Translation', 'Mitosis', 'Natural selection'], 'Transcription copies information from DNA into RNA. Translation reads an RNA sequence to build a polypeptide.']),
    U('Evolution and evidence',
      'Natural selection changes the frequency of heritable traits across generations when those traits affect reproductive success in a particular environment. DNA similarities and shared anatomical structures can provide evidence of common ancestry.',
      [
        ['A dark substrate makes pale insects easier for birds to see. Pale and dark colors are heritable. Explain a possible shift in the population.', 'If dark insects survive and reproduce more often, they contribute a larger share of the next generation. The frequency of dark color can rise.'],
        ['Two species share several matching DNA sequences, while a third species shares fewer. Explain how the comparison can be used.', 'The first two species may share a more recent common ancestor. The conclusion is stronger when it is supported by many independent comparisons.'],
      ],
      [
        ['Read a frequency change', 'The proportion of a heritable trait increases from 0.25 to 0.40. Find the increase in percentage points.', 'The change is $0.40-0.25=0.15$, which is 15 percentage points.', '15'],
        ['Interpret change across generations', 'Explain why an individual growing stronger through exercise is not an example of natural selection.', 'The change occurs within one individual. Natural selection changes the frequencies of heritable traits in a population over generations.'],
        ['Compare models of ancestry', 'Which pattern better supports recent common ancestry, many shared DNA changes at independent sites or one shared habitat? Explain.', 'The shared DNA changes are direct evidence of relatedness. Unrelated species can occupy the same habitat.'],
      ],
      ['What must be true for a trait to increase by natural selection across generations?', 'The trait is heritable and gives a reproductive advantage in that setting.',
        ['Every individual acquires the trait during life.', 'The trait is always beneficial in every environment.', 'All individuals reproduce equally regardless of the trait.'],
        'Differential reproduction changes trait frequency only when the relevant variation can be passed to offspring.']),
    U('Ecosystems and population dynamics',
      'Food webs represent feeding relationships. Only some energy stored in biomass reaches the next trophic level. Population change combines births, deaths, immigration and emigration, and resources limit sustained growth.',
      [
        ['A population begins at 120. During the year there are 25 births, 18 deaths, 7 immigrants and 9 emigrants. Find its final size.', 'Add births and immigrants and subtract deaths and emigrants. The final size is $120+25-18+7-9=125$.'],
        ['In a model, 10% of the energy available at one trophic level reaches the next. If producers contain 8,000 energy units, estimate the energy reaching primary consumers.', 'The model gives $0.10(8000)=800$ units. The fraction is a model assumption and can differ across ecosystems.'],
      ],
      [
        ['Population balance', 'A closed population of 70 has 16 births and 11 deaths. Find its new size.', 'There is no movement into or out of the population, so the size is $70+16-11=75$.', '75'],
        ['Energy transfer', 'Using a 10% transfer model, how many energy units reach the next level from 2,400?', 'Multiply $2400$ by $0.10$ to get $240$.', '240'],
        ['Explain a limiting resource', 'A population rises after a wet spring and levels off as food per individual falls. Explain why growth can slow.', 'Scarcer food can reduce survival or reproduction. When births and arrivals approximately balance deaths and departures, the population stops rising rapidly.'],
      ],
      ['Which observation most directly supports the claim that food limits population growth?', 'Populations given additional food grew more than comparable populations without it.',
        ['The study counted each population only once.', 'The populations lived near a river.', 'All populations had the same starting size.'],
        'The controlled comparison changes food availability and measures the growth response.']),
  ]),
  C('hs-chemistry', 'Chemistry', 'Connect particle models and the periodic table to reactions, solutions and chemical change.', 'Algebra I, ratios and scientific notation.', sources, [
    U('Atomic structure and periodic trends',
      'Atomic number counts protons and identifies an element. Isotopes of the same element have different neutron numbers. Across a period, atomic radius generally decreases as nuclear attraction on the valence electrons increases.',
      [
        ['Find the protons and neutrons of an isotope with atomic number 17 and mass number 37.', 'Atomic number gives 17 protons. Since the mass number counts protons plus neutrons, there are $37-17=20$ neutrons.'],
        ['A sample has 75% of isotope X-10 and 25% of X-11. Estimate the average mass using the given mass numbers.', 'Take the weighted average $0.75(10)+0.25(11)=10.25$ atomic mass units.'],
      ],
      [
        ['Neutrons in an isotope', 'Find the number of neutrons in an atom with atomic number 12 and mass number 26.', 'Subtract the proton count from the mass number, $26-12=14$.', '14'],
        ['Electron count in an ion', 'An ion has 16 protons and charge $2-$. Find its number of electrons.', 'A charge of $2-$ means two more electrons than protons. The ion has $18$ electrons.', '18'],
        ['Weighted mean', 'An element is 80% isotope X-20 and 20% X-22. Use mass numbers to estimate the average atomic mass.', 'The weighted mean is $0.80(20)+0.20(22)=20.4$.', '20.4'],
      ],
      ['Which pair consists of isotopes of the same element?', 'Atoms with the same number of protons and different numbers of neutrons.',
        ['Atoms with the same number of neutrons and different numbers of protons.', 'Atoms with the same mass number and different atomic numbers.', 'Atoms with different numbers of protons and the same number of electrons.'],
        'Equal proton counts identify the same element. Isotopes differ in their neutron counts.']),
    U('Bonding, structure and properties',
      'Ionic models describe attractions between ions. Covalent bonds involve shared electron density. The polarity of a molecule depends on both the polarity of its bonds and the three-dimensional arrangement of those bonds.',
      [
        ['Find the simplest formula made from magnesium ions $\\mathrm{Mg}^{2+}$ and chloride ions $\\mathrm{Cl}^-$.', 'One magnesium ion contributes $+2$. Two chloride ions contribute $-2$, giving the neutral formula $\\mathrm{MgCl}_2$.'],
        ['Explain why linear $\\mathrm{CO}_2$ has no net molecular dipole even though its bonds are polar.', 'The two equal bond dipoles point in opposite directions along the same line. Their vector sum is zero.'],
      ],
      [
        ['Balance ionic charge', 'How many fluoride ions with charge $1-$ are needed for one aluminum ion with charge $3+$?', 'Three charges of $-1$ balance the aluminum charge $+3$.', '3'],
        ['Interpret a formula', 'In one formula unit of $\\mathrm{Ca}_3(\\mathrm{PO}_4)_2$, count the oxygen atoms.', 'There are two phosphate groups and four oxygen atoms per group, for a total of $8$.', '8'],
        ['Explain a property', 'Why can an ionic solid conduct electricity when molten even if it barely conducts as a solid?', 'Melting allows its ions to move. Mobile charges carry current, whereas the ions in the solid are held in the crystal lattice.'],
      ],
      ['Which molecule is polar because its bent shape prevents its bond dipoles from canceling?', 'Water', ['Carbon dioxide', 'Oxygen gas', 'Nitrogen gas'], 'Water is bent. Its two O–H bond dipoles do not cancel.']),
    U('Chemical equations, moles and stoichiometry',
      'A balanced chemical equation conserves each kind of atom. Its coefficients give mole ratios. To find the limiting reactant, compare how much product each available reactant can make.',
      [
        ['For $2\\mathrm{H}_2+\\mathrm{O}_2\\rightarrow2\\mathrm{H}_2\\mathrm{O}$, find the water produced from 3 mol of oxygen with excess hydrogen.', 'The equation gives 2 mol of water per mole of oxygen. The amount is $3(2)=6$ mol.'],
        ['For $\\mathrm{N}_2+3\\mathrm{H}_2\\rightarrow2\\mathrm{NH}_3$, start with 2 mol nitrogen and 3 mol hydrogen. Identify the limiting reactant.', 'Two moles of nitrogen would need 6 mol hydrogen. Only 3 mol are present, so hydrogen limits the reaction and produces 2 mol ammonia.'],
      ],
      [
        ['Moles from mass', 'Use 18 g/mol for water. Find the number of moles in 45 g.', 'Divide mass by molar mass, $45/18=2.5$ mol.', '2.5'],
        ['Read a mole ratio', 'In $2\\mathrm{CO}+\\mathrm{O}_2\\rightarrow2\\mathrm{CO}_2$, find the oxygen needed for 7 mol of carbon monoxide. Enter moles.', 'The oxygen-to-carbon-monoxide ratio is $1/2$, so the amount is $3.5$ mol.', '3.5'],
        ['Limiting quantity', 'For $2A+B\\rightarrow3C$, start with 4 mol $A$ and 3 mol $B$. Find moles of $C$ formed if the reaction goes to completion.', 'The 4 mol $A$ can react with 2 mol $B$. That produces $6$ mol $C$, leaving 1 mol $B$.', '6'],
      ],
      ['Why are subscripts left unchanged when balancing a chemical equation?', 'A subscript is part of the identity of the substance.',
        ['Subscripts show the number of moles in a sample.', 'A subscript can change without affecting the substance.', 'Coefficients change only the number of electrons.'],
        'Balancing adjusts how many units react. Changing a subscript would change the formula itself.']),
    U('Gases and solutions',
      'For a fixed amount of ideal gas, pressure, volume and absolute temperature satisfy $PV=nRT$. Molarity is moles of dissolved solute per liter of solution. In dilution, the amount of solute stays constant when only solvent is added.',
      [
        ['A gas occupies 3.0 L at 2.0 atm. It is compressed to 1.5 L at constant temperature. Find its pressure.', 'At constant temperature and amount, $P_1V_1=P_2V_2$. So $P_2=2.0(3.0)/1.5=4.0$ atm.'],
        ['Find the molarity of a solution containing 0.40 mol solute in 2.0 L of solution.', 'Divide moles by liters, $0.40/2.0=0.20$ mol/L.'],
      ],
      [
        ['Gas pressure', 'A fixed sample at constant temperature changes from 8 L at 1.5 atm to 6 L. Enter the new pressure in atm.', 'Solve $1.5(8)=P_2(6)$, giving $P_2=2$ atm.', '2'],
        ['Molarity', 'Find the molarity of 0.15 mol solute in 0.50 L of solution.', 'The concentration is $0.15/0.50=0.30$ mol/L.', '0.30'],
        ['Dilution', 'Dilute 100 mL of 2.0 M solution to 500 mL total. Enter final molarity.', 'Conservation of solute gives $2.0(100)=M_2(500)$, so $M_2=0.40$ M.', '0.40'],
      ],
      ['Why is temperature expressed in kelvins in the ideal gas law?', 'The proportional relationships use absolute temperature.',
        ['A kelvin is a unit of pressure.', 'Gas volume is measured in kelvins.', 'Degrees Celsius and kelvins have the same zero.'],
        'The gas-law temperature scale starts at absolute zero. Degrees Celsius use a different zero point.']),
    U('Energy, reaction rates, equilibrium and pH',
      'A reaction can transfer energy between the system and surroundings. Catalysts lower the activation energy for forward and reverse processes. At dynamic equilibrium their rates are equal. In dilute solutions, $\\mathrm{pH}=-\\log_{10}[\\mathrm{H}^+]$ is a useful model.',
      [
        ['A reaction mixture warms a nearby water sample. Which way did energy flow?', 'Energy flowed from the reacting system to the water in the surroundings. The temperature rise is evidence of an exothermic process under the stated conditions.'],
        ['Estimate pH when hydrogen ion concentration is $10^{-3}$ mol/L.', 'Take the negative base-10 logarithm. The result is $-(-3)=3$.'],
      ],
      [
        ['pH calculation', 'Find pH for $[\\mathrm{H}^+]=10^{-5}$ mol/L.', 'The negative base-10 logarithm is $5$.', '5'],
        ['Compare acid concentrations', 'How many times larger is hydrogen ion concentration at pH 2 than at pH 4?', 'The ratio is $10^{-2}/10^{-4}=100$.', '100'],
        ['Explain dynamic equilibrium', 'Do molecular reactions stop when concentrations stabilize in a closed system at equilibrium?', 'The forward and reverse reactions continue at equal rates. As a result, concentrations stay constant.'],
      ],
      ['What does a catalyst change for a reaction at a fixed temperature?', 'How quickly equilibrium is approached.',
        ['The equilibrium constant.', 'Which elements are present in the system.', 'The amount of product at equilibrium for the same starting composition.'],
        'A catalyst increases the rates of both directions and leaves the equilibrium condition unchanged.']),
  ]),
];
