import { course as C } from '../lesson.mjs';
import { unit as U, scienceFramework, texasScience } from './material.mjs';

const sources = [scienceFramework, texasScience];

export const physicalScience = [
  C('hs-physics', 'Physics', 'Use algebra, graphs and conservation laws to model motion, energy, waves and circuits.', 'Algebra I, basic geometry and interpreting graphs.', sources, [
    U('Motion and graphs',
      'The slope of a position–time graph gives velocity. The slope of a velocity–time graph gives acceleration, and the signed area under that graph gives displacement. The constant-acceleration formulas apply when acceleration is constant.',
      [
        ['Position increases from 4 m to 16 m in 3 s. Find the average velocity.', 'Divide displacement $16-4=12$ m by $3$ s, giving $4$ m/s.'],
        ['Velocity rises linearly from 2 to 8 m/s over 4 s. Find displacement.', 'The area under the velocity graph is a trapezoid. Its area is $4(2+8)/2=20$ m.'],
      ],
      [
        ['Read a slope', 'Position changes from 7 m to $-5$ m in 4 s. Enter average velocity in m/s.', 'The displacement is $-12$ m, so the average velocity is $-3$ m/s.', '-3'],
        ['Acceleration', 'Velocity changes from 4 to 16 m/s in 6 s. Find the average acceleration in m/s².', 'Compute $(16-4)/6=2$ m/s².', '2'],
        ['Distance at constant acceleration', 'A cart starts from rest and accelerates at 3 m/s² for 4 s. Enter its displacement in meters.', 'Use $s=\\tfrac12 at^2=\\tfrac12(3)(4^2)=24$ m.', '24'],
      ],
      ['What does the area under a velocity–time graph represent?', 'Displacement', ['Acceleration', 'Average velocity', 'Net force'], 'Multiplying velocity by a time interval gives displacement, with sign.']),
    U('Forces, Newton’s laws and gravitation',
      'The net force on an object is mass times acceleration. A free-body diagram includes the forces acting on the chosen object. Newton’s third-law pairs act on different objects. Gravitational attraction decreases with the square of the separation.',
      [
        ['A 5-kg crate experiences 18 N to the right and 8 N to the left. Find its acceleration.', 'The net force is $10$ N to the right. Divide by the mass to get $2$ m/s² to the right.'],
        ['A person stands at rest on a level floor. Compare weight and normal force.', 'The vertical acceleration is zero. The upward normal force and downward weight have equal magnitudes on this person.'],
      ],
      [
        ['Net force', 'A 3-kg cart accelerates at 4 m/s². Enter the net force magnitude in newtons.', 'Newton’s second law gives $F=3(4)=12$ N.', '12'],
        ['Weight', 'Using $g=9.8$ m/s², find the weight in newtons of a 10-kg object.', 'Multiply mass by gravitational acceleration, $10(9.8)=98$ N.', '98'],
        ['Gravitational scaling', 'The distance between two masses triples while their masses stay fixed. Enter the new force divided by the original force.', 'The inverse-square law gives a factor of $1/3^2=1/9$.', '1/9'],
      ],
      ['A skater pushes on a wall. Where does the third-law partner force act?', 'On the skater, exerted by the wall.', ['On the wall, exerted by gravity.', 'On the skater, exerted by the ground.', 'On the wall, in the same direction as the push.'], 'The forces in a third-law pair act on two different objects.']),
    U('Work, energy and heat',
      'A force does work when it has a component along a displacement. Kinetic energy is $mv^2/2$. Near Earth’s surface, a change in height changes gravitational potential energy by $mg\\Delta h$. Energy can be transferred as work or heat.',
      [
        ['A 30 N horizontal force moves a box 5 m in the same direction. Find the work done by this force.', 'The force is parallel to the displacement. Its work is $30(5)=150$ J.'],
        ['A 2-kg object falls 5 m from rest with negligible air resistance. Use $g=10$ m/s² and find the final speed.', 'The loss of gravitational energy is $2(10)(5)=100$ J. It becomes kinetic energy, so $v^2=100$ and $v=10$ m/s.'],
      ],
      [
        ['Kinetic energy', 'Find the kinetic energy in joules of a 4-kg object moving at 3 m/s.', 'Compute $(1/2)(4)(3^2)=18$ J.', '18'],
        ['Gravitational energy', 'Find the gain in potential energy when 6 kg is lifted 2 m. Use $g=10$ m/s² and enter joules.', 'Multiply $mgh=6(10)(2)=120$ J.', '120'],
        ['Heat transfer', 'A 2-kg sample with specific heat 900 J/(kg·°C) warms by 5°C. Enter the heat it absorbs in joules.', '$Q=mc\\Delta T=2(900)(5)=9000$ J.', '9000'],
      ],
      ['An object moving at speed $v$ doubles its speed while its mass stays fixed. What happens to kinetic energy?', 'It becomes four times as large.', ['It doubles.', 'It stays the same.', 'It becomes eight times as large.'], 'Kinetic energy is proportional to the square of speed.']),
    U('Momentum and collisions',
      'Momentum is mass times velocity, including direction. Impulse equals change in momentum. The total momentum of a system stays constant when its external impulse is negligible, even when kinetic energy changes.',
      [
        ['A 2-kg cart moving right at 3 m/s sticks to a stationary 1-kg cart. Find their final velocity.', 'Initial momentum is $6$ kg·m/s to the right. Dividing by the combined mass of 3 kg gives $2$ m/s to the right.'],
        ['A 0.5-kg ball changes velocity from 8 m/s to $-4$ m/s. Find the signed impulse.', 'The change in momentum is $0.5(-4-8)=-6$ kg·m/s, so the impulse is $-6$ N·s.'],
      ],
      [
        ['Momentum', 'Find the magnitude of the momentum of a 5-kg object moving at 4 m/s. Enter kg·m/s.', 'Multiply mass by speed, giving $20$ kg·m/s.', '20'],
        ['Impulse', 'A net force of 12 N acts in a constant direction for 0.25 s. Find the impulse magnitude in N·s.', 'Multiply force by time to get $3$ N·s.', '3'],
        ['Sticking collision', 'A 3-kg cart moving at 4 m/s sticks to a stationary 1-kg cart. Enter their common speed in m/s.', 'Initial momentum is $12$ kg·m/s. The combined mass is 4 kg, so the speed is $3$ m/s.', '3'],
      ],
      ['What is conserved in an inelastic collision of an isolated system?', 'Total momentum.', ['Kinetic energy of each object.', 'Speed of each object.', 'The sum of the objects’ speeds.'], 'With negligible external impulse, the total momentum is conserved. Kinetic energy can change.']),
    U('Waves, sound and light',
      'Wave speed is frequency times wavelength. Mechanical waves need a material medium. Electromagnetic waves can travel in a vacuum. When waves overlap, their displacements add and can reinforce or cancel.',
      [
        ['A wave has frequency 5 Hz and wavelength 2 m. Find its speed.', 'Use $v=f\\lambda=5(2)=10$ m/s.'],
        ['A sound wave moves through air at 340 m/s with frequency 170 Hz. Find the wavelength.', 'Divide speed by frequency. The wavelength is $340/170=2$ m.'],
      ],
      [
        ['Find a wavelength', 'A wave travels at 18 m/s with frequency 6 Hz. Enter wavelength in meters.', 'Use $\\lambda=v/f=18/6=3$ m.', '3'],
        ['Read a period', 'A wave repeats every 0.20 s. Enter frequency in hertz.', 'Frequency is the reciprocal of period, $1/0.20=5$ Hz.', '5'],
        ['Wave interference', 'At a point, one pulse produces displacement $+3$ cm and another produces $-3$ cm. Find the instantaneous net displacement in centimeters.', 'Add the displacements. They cancel to $0$.', '0'],
      ],
      ['Which type of wave can propagate through a vacuum?', 'Visible light', ['Sound in air', 'A wave on a rope', 'A surface water wave'], 'Visible light is electromagnetic, so it does not require matter to propagate.']),
    U('Electricity, circuits and magnetism',
      'Electric current is the rate at which charge flows. For a resistor that obeys Ohm’s law, $V=IR$. Resistors in series carry the same current, and parallel branches share the same voltage. A current produces a magnetic field around its path.',
      [
        ['Find the current through a 4-ohm resistor connected to a 12 V source.', 'Divide voltage by resistance, $I=12/4=3$ A.'],
        ['Two 6-ohm resistors are connected in parallel. Find the equivalent resistance.', 'Their reciprocal resistances add, giving $1/R=1/6+1/6=1/3$. The equivalent resistance is 3 ohms.'],
      ],
      [
        ['Find voltage', 'A 5-ohm resistor carries 2 A. Enter voltage in volts.', 'Ohm’s law gives $V=2(5)=10$ V.', '10'],
        ['Series resistance', 'Find the equivalent resistance in ohms of 3-ohm and 7-ohm resistors in series.', 'In series the resistances add, giving 10 ohms.', '10'],
        ['Electric power', 'A device uses 3 A at 12 V. Find its electric power in watts.', 'Power is $VI=12(3)=36$ W.', '36'],
      ],
      ['Two resistors are in parallel across an ideal battery. Which quantity is the same across both resistors?', 'Voltage', ['Current for every pair of resistances', 'Resistance', 'Power for every pair of resistances'], 'Both resistors connect between the same two nodes, so their voltage drops are equal.']),
  ]),
  C('hs-earth-space-science', 'Earth and Space Science', 'Use observations and models to study the universe, Earth’s history, climate and resources.', 'Basic graphs, ratios and scientific notation.', sources, [
    U('Stars, spectra and the scale of space',
      'Starlight contains spectral lines associated with elements. A shift in those lines can provide evidence about motion along the line of sight. Stars convert mass to energy through fusion during much of their lifetimes.',
      [
        ['Spectral lines from a galaxy are observed at longer wavelengths than their laboratory values. Explain the observation.', 'Longer wavelengths indicate a redshift. In the usual interpretation for distant galaxies, the pattern is evidence that the distance to the source is increasing.'],
        ['A star is 6 light-years away. How old is the light received from it now?', 'A light-year measures distance. Light travels that distance in one year, so the light was emitted six years ago.'],
      ],
      [
        ['Light travel time', 'A light signal comes from a star 14 light-years away. Enter the travel time in years.', 'A light-year is the distance traveled by light in one year, so the travel time is 14 years.', '14'],
        ['Compare wavelengths', 'A spectral line moves from a reference wavelength of 500 nm to 510 nm. Find the increase in nanometers.', 'The wavelength increase is $510-500=10$ nm.', '10'],
        ['Evidence of fusion', 'What process supplies most of the Sun’s energy at present?', 'Fusion in the core combines light nuclei, releasing energy.'],
      ],
      ['What information can characteristic absorption lines in starlight provide?', 'Which elements are present in the absorbing gas.', ['The exact age of every star without further evidence.', 'The local weather on Earth.', 'The number of planets orbiting the star.'], 'Elements absorb characteristic sets of wavelengths. Comparing measured lines with reference spectra can identify the elements.']),
    U('Earth history and plate tectonics',
      'Relative dating places events in order. In an undisturbed sedimentary sequence, older layers lie beneath younger ones. Radiometric dating uses decay rates to estimate ages. Plate motion helps explain the locations of many earthquakes and volcanoes.',
      [
        ['A fault cuts two rock layers but does not cut a third layer deposited across them. Place the fault in the sequence.', 'The fault must be younger than the two layers it cuts. The undisturbed layer across it was deposited after the faulting.'],
        ['A mineral retains one quarter of its initial parent isotope. How many half-lives have passed?', 'After one half-life the fraction is $1/2$. After a second, the fraction is $1/4$, so two half-lives passed.'],
      ],
      [
        ['Half-lives', 'A mineral retains one eighth of its initial parent isotope. Enter the number of half-lives.', 'The remaining fraction is $(1/2)^3=1/8$, so three half-lives passed.', '3'],
        ['Plate motion', 'A plate moves at 4 cm per year for 25 years. Enter the distance in centimeters.', 'Multiply rate by time. The displacement magnitude is $100$ cm.', '100'],
        ['Interpret a boundary', 'At an ocean ridge, the youngest oceanic crust is found near the center. Explain why.', 'New oceanic crust forms at the spreading center and moves away as the plates diverge.'],
      ],
      ['In an undisturbed sequence of sedimentary layers, which layer is oldest?', 'The bottom layer', ['The top layer', 'The thinnest layer', 'The darkest layer'], 'The principle of superposition places older deposits below younger deposits when the sequence is undisturbed.']),
    U('Earth systems, water and carbon',
      'Earth’s atmosphere, water, solid Earth and living organisms exchange matter and energy. In a drainage basin, precipitation is partitioned among runoff, infiltration, evaporation and changes in storage. The carbon cycle includes transfers among air, water, organisms and rocks.',
      [
        ['A basin receives 80 mm of rain. Over the period, 20 mm evaporates and 15 mm becomes runoff. If the remaining water stays in the basin’s storage, find the change in storage.', 'Use the stated water balance. Storage increases by $80-20-15=45$ mm.'],
        ['Explain why replacing soil and vegetation with pavement can raise the flow peak after rain.', 'Pavement usually reduces infiltration and storage. A greater fraction of rainfall reaches channels quickly as runoff, which can raise the peak flow.'],
      ],
      [
        ['Water balance', 'A simplified watershed receives 60 mm of rainfall. Runoff is 18 mm and evaporation is 22 mm. Find the remaining storage increase in millimeters.', 'Subtract the two outputs, $60-18-22=20$ mm.', '20'],
        ['Carbon balance', 'A model atmosphere gains 12 units of carbon and loses 7 units over a year. Enter the signed net change.', 'The net gain is $12-7=5$ units.', '5'],
        ['Name a carbon transfer', 'Describe one way carbon moves from the atmosphere into living biomass.', 'Photosynthesis incorporates carbon from atmospheric carbon dioxide into sugars and other molecules in living tissue.'],
      ],
      ['Which change most directly increases rapid surface runoff after the same rainfall?', 'Replacing permeable soil with pavement.', ['Increasing the number of deep-rooted plants.', 'Increasing soil infiltration capacity.', 'Adding a basin that stores rainwater.'], 'Pavement leaves less opportunity for water to enter the ground or be stored locally.']),
    U('Weather, climate and feedbacks',
      'Weather describes conditions over short periods. Climate describes the distribution and patterns of conditions over longer periods. Surface albedo is the reflected fraction of incoming light. Loss of reflective ice can increase absorption and reinforce warming.',
      [
        ['A region experiences one unusually cold week during a long warming trend. Explain how both observations can be true.', 'One week is a short-term weather event. A climate trend is inferred from many observations over a much longer interval and includes short-term variability.'],
        ['An ice surface reflects 60% of incoming light. The darker surface left after melting reflects 20%. Compare absorption in a model with no transmission.', 'Absorption rises from 40% to 80%. With the same incoming energy, the absorbed fraction doubles.'],
      ],
      [
        ['Compute absorption', 'A surface reflects 25% of incoming light and transmits none. Enter the percent absorbed.', 'The remaining $100-25=75$% is absorbed.', '75'],
        ['Read a time series', 'A long-term average rises from 12.4°C to 13.1°C. Enter the temperature change in degrees Celsius.', 'The later value minus the earlier value is $0.7$°C.', '0.7'],
        ['Explain feedback', 'Why can a decrease in reflective sea ice contribute to more melting?', 'Darker water absorbs more incoming sunlight. The extra energy can warm the surroundings, promoting further loss of ice.'],
      ],
      ['Which dataset is better suited to estimating a local climate trend?', 'Annual averages from a consistent station over 40 years.', ['Hourly temperatures from one afternoon.', 'The two coldest days in one winter.', 'A forecast for next week.'], 'Estimating a climate trend requires enough time to distinguish changes from short-term variability.']),
    U('Natural hazards and resource decisions',
      'Risk depends on the physical hazard, exposure and vulnerability. A hazard map alone does not specify how many people or buildings are exposed. Evaluating a resource decision requires comparing benefits, environmental effects and uncertainties.',
      [
        ['Two neighborhoods face the same river flood depth. One has more buildings at ground level. Which is likely to suffer more damage, all else equal?', 'The hazard is the same, but more buildings are exposed at the vulnerable elevation. The neighborhood with more exposed buildings has greater potential loss.'],
        ['Two electricity options have the same annual output. One uses more water. Identify one additional quantity that would help compare them.', 'Local seasonal water availability is relevant. The effect of higher water use depends on when and where the water is drawn.'],
      ],
      [
        ['Count exposure', 'A flood zone includes 36 of a town’s 240 buildings. Enter the percentage exposed.', '$100(36/240)=15$%.', '15'],
        ['Compare resource use', 'A process uses 80 liters per batch. A redesign uses 60 liters. Enter the percent reduction.', 'The decrease is 20 liters relative to 80 liters, so the reduction is 25%.', '25'],
        ['Separate hazard from risk', 'A landslide-prone slope has no roads or buildings below it. Explain why damage risk can be low even with a high hazard.', 'A slide may still be likely, but there are few exposed structures. High hazard does not by itself imply high expected damage.'],
      ],
      ['Which action reduces building exposure without changing the physical flood hazard?', 'Moving buildings out of the floodplain.', ['Measuring river depth more often.', 'Renaming the hazard zone.', 'Increasing rainfall in the basin.'], 'Relocating the buildings changes the assets in the exposed area while leaving the underlying flood process unchanged.']),
  ]),
];
