export const productsData = [
  // PRODUCTION CHEMICALS
  {
    slug: 'demulsifiers',
    title: 'Demulsifiers',
    icon: 'DropletIcon',
    category: 'production-chemicals',
    shortDescription:
      'Tailored solutions for rapid and efficient separation of water from crude oil, maximizing oil quality and process efficiency.',
    heroDescription:
      'Custom-engineered demulsification programs to achieve rapid water drop, sharp interfaces, and on-spec crude oil.',
    features: [
      'Resin, alkoxylate, and polymeric chemistries',
      'Broad spectrum efficacy across various crude types',
      'Fast-acting water separation',
      'Effective at low temperatures',
      'Reduces basic sediment and water (BS&W)',
      'Improves effluent water quality'
    ],
    applications: [
      'Free water knockouts (FWKO)',
      'Heater treaters',
      'Electrostatic desalters',
      'Storage and settling tanks',
      'Heavy oil and SAGD operations',
      'Offshore production platforms'
    ],
    benefits: [
      {
        title: 'Meet Export Specifications',
        description: 'Consistently achieve required BS&W and salt content limits.'
      },
      {
        title: 'Reduce Heating Costs',
        description: 'Effective separation at lower temperatures saves energy.'
      },
      {
        title: 'Improve Water Quality',
        description: 'Cleaner separated water reduces the load on water treatment systems.'
      },
      {
        title: 'Maximize Vessel Capacity',
        description: 'Faster separation allows for increased throughput in existing equipment.'
      }
    ],
    relatedProducts: ['water-clarifiers', 'antifoams', 'corrosion-inhibitors']
  },
  {
    slug: 'water-clarifiers',
    title: 'Water Clarifiers',
    icon: 'BeakerIcon',
    category: 'production-chemicals',
    shortDescription:
      'Advanced coagulants and flocculants for efficient water treatment and oil-water separation.',
    heroDescription:
      'High-performance water clarification solutions for produced water treatment and discharge compliance.',
    features: [
      'Cationic and anionic polymers',
      'Rapid flocculation and settling',
      'Effective across wide pH range',
      'Reduces turbidity and suspended solids',
      'Improves oil-water separation',
      'Environmentally acceptable formulations'
    ],
    applications: [
      'Produced water treatment',
      'Water disposal systems',
      'Oil-water separators',
      'Flotation units',
      'Clarification tanks',
      'Offshore discharge systems'
    ],
    benefits: [
      {
        title: 'Meet Discharge Standards',
        description: 'Achieve regulatory limits for oil-in-water and suspended solids.'
      },
      {
        title: 'Reduce Treatment Costs',
        description: 'Efficient clarification reduces downstream processing requirements.'
      },
      {
        title: 'Improve Water Reuse',
        description: 'Enable water recycling for injection or other applications.'
      },
      {
        title: 'Minimize Environmental Impact',
        description: 'Ensure compliant discharge and reduce ecological footprint.'
      }
    ],
    relatedProducts: ['demulsifiers', 'biocides']
  },
  {
    slug: 'biocides',
    title: 'Biocides',
    icon: 'BugIcon',
    category: 'production-chemicals',
    shortDescription:
      'Broad-spectrum microbial control agents that prevent souring, microbiologically influenced corrosion (MIC), and biofouling.',
    heroDescription:
      'Targeted microbial control programs to protect assets from MIC, prevent reservoir souring, and maintain system efficiency.',
    features: [
      'Oxidizing and non-oxidizing chemistries (THPS, Glutaraldehyde, Quats)',
      'Broad-spectrum efficacy against SRB, APB, and biofilm',
      'Fast-acting and long-lasting formulations',
      'Compatible with other production chemicals',
      'Environmentally acceptable profiles',
      'Advanced monitoring and ATP testing support'
    ],
    applications: [
      'Water injection systems',
      'Produced water handling',
      'Pipelines and storage tanks',
      'Hydrotesting operations',
      'Fracturing fluids',
      'Cooling towers'
    ],
    benefits: [
      {
        title: 'Prevent MIC',
        description: 'Mitigate microbiologically influenced corrosion and extend asset life.'
      },
      {
        title: 'Control Souring',
        description: 'Prevent the generation of H2S by sulfate-reducing bacteria (SRB).'
      },
      {
        title: 'Maintain Injectivity',
        description: 'Prevent biofouling that can plug injection wells and filters.'
      },
      {
        title: 'Ensure Safety',
        description: 'Reduce the risks associated with H2S exposure and catastrophic failures.'
      }
    ],
    relatedProducts: ['corrosion-inhibitors', 'h2s-scavengers', 'water-clarifiers']
  },
  {
    slug: 'corrosion-inhibitors',
    title: 'Corrosion Inhibitors',
    icon: 'ShieldIcon',
    category: 'production-chemicals',
    shortDescription:
      'Advanced formulations designed to protect critical infrastructure from harsh environments, extending asset lifecycle and reducing maintenance costs.',
    heroDescription:
      'Comprehensive corrosion management solutions that protect your most critical assets in the harshest operating environments.',
    features: [
      'Film-forming amine technology',
      'Oil-soluble and water-soluble formulations',
      'High-temperature stability up to 350°F',
      'Compatible with all metallurgies',
      'Environmentally acceptable options available',
      'Real-time corrosion monitoring integration'
    ],
    applications: [
      'Downhole tubulars and completions',
      'Surface production facilities',
      'Pipelines and flowlines',
      'Refineries and processing plants',
      'Storage tanks and vessels',
      'Water injection systems'
    ],
    benefits: [
      {
        title: 'Reduce Maintenance Costs',
        description: 'Up to 40% reduction in corrosion-related maintenance expenditure.'
      },
      {
        title: 'Extend Asset Life',
        description: 'Protect critical infrastructure and extend operational lifespan by 3-5x.'
      },
      {
        title: 'Minimize Downtime',
        description: 'Prevent unplanned shutdowns caused by corrosion failures.'
      },
      {
        title: 'Meet Compliance',
        description: 'Formulations that meet NACE, OSPAR, and regional environmental standards.'
      }
    ],
    relatedProducts: ['scale-inhibitors', 'biocides', 'oxygen-scavengers']
  },
  {
    slug: 'scale-inhibitors',
    title: 'Scale Inhibitors',
    icon: 'LayersIcon',
    category: 'production-chemicals',
    shortDescription:
      'High-performance chemicals that prevent mineral deposition, ensuring optimal flow rates and protecting vital production equipment.',
    heroDescription:
      'Advanced scale control technologies to maintain flow assurance and protect critical infrastructure from mineral deposition.',
    features: [
      'Phosphonate and polymer-based chemistries',
      'Effective against calcium carbonate, barium sulfate, and exotic scales',
      'High-temperature and high-salinity tolerance',
      'Continuous injection and squeeze application options',
      'Low minimum effective concentration (MEC)',
      'Biodegradable formulations available'
    ],
    applications: [
      'Production wells (squeeze treatments)',
      'Subsea flowlines and tie-backs',
      'Topside processing equipment',
      'Water injection and disposal wells',
      'Geothermal systems',
      'Cooling water circuits'
    ],
    benefits: [
      {
        title: 'Maintain Production Rates',
        description: 'Prevent flow restrictions and maintain optimal production levels.'
      },
      {
        title: 'Protect Equipment',
        description: 'Avoid costly damage to pumps, valves, and heat exchangers.'
      },
      {
        title: 'Extend Intervention Intervals',
        description: 'Reduce the frequency of costly well interventions and workovers.'
      },
      {
        title: 'Optimize Treatment Costs',
        description: 'Highly efficient formulations reduce overall chemical consumption.'
      }
    ],
    relatedProducts: ['corrosion-inhibitors', 'paraffin-inhibitors']
  },
  {
    slug: 'paraffin-inhibitors',
    title: 'Paraffin Inhibitors',
    icon: 'ThermometerIcon',
    category: 'production-chemicals',
    shortDescription:
      'Specialized polymers that prevent wax deposition in production systems, maintaining flow and preventing costly interventions.',
    heroDescription:
      'Advanced wax management solutions to ensure continuous flow in waxy crude production.',
    features: [
      'Comb polymer and EVA-based formulations',
      'Crystal modification and dispersion mechanisms',
      'Effective at low treat rates',
      'Compatible with crude oil systems',
      'Temperature-activated formulations',
      'Pour point depression capability'
    ],
    applications: [
      'Waxy crude production wells',
      'Subsea flowlines',
      'Export pipelines',
      'Storage tanks',
      'Wellhead equipment',
      'Offshore platforms'
    ],
    benefits: [
      {
        title: 'Prevent Wax Blockages',
        description: 'Eliminate costly pigging operations and flow interruptions.'
      },
      {
        title: 'Reduce Hot Oiling',
        description: 'Minimize thermal treatment requirements and energy costs.'
      },
      {
        title: 'Extend Run Times',
        description: 'Maintain consistent production without wax-related shutdowns.'
      },
      {
        title: 'Lower Operating Costs',
        description: 'Reduce intervention frequency and maintenance expenses.'
      }
    ],
    relatedProducts: ['pour-point-depressants', 'asphaltene-inhibitors']
  },
  {
    slug: 'asphaltene-inhibitors',
    title: 'Asphaltene Inhibitors',
    icon: 'BarChart3Icon',
    category: 'production-chemicals',
    shortDescription:
      'Dispersant chemistries that prevent asphaltene precipitation and stabilize crude oil systems.',
    heroDescription:
      'Proven asphaltene management technologies for heavy oil and unstable crude production.',
    features: [
      'Dispersant and stabilizer chemistries',
      'Prevents flocculation and precipitation',
      'Effective in aromatic and aliphatic systems',
      'Low dosage requirements',
      'Compatible with production chemicals',
      'Extends equipment operational life'
    ],
    applications: [
      'Heavy oil production',
      'Blending operations',
      'Pipeline transportation',
      'Downhole treatments',
      'Storage and transfer systems',
      'Refinery crude units'
    ],
    benefits: [
      {
        title: 'Prevent Deposition',
        description: 'Avoid asphaltene fouling in wells, flowlines, and processing equipment.'
      },
      {
        title: 'Maintain Production',
        description: 'Ensure stable crude properties and consistent flow rates.'
      },
      {
        title: 'Protect Infrastructure',
        description: 'Reduce fouling-related damage to pumps, heat exchangers, and vessels.'
      },
      {
        title: 'Enable Blending',
        description: 'Stabilize incompatible crude blends for transport and processing.'
      }
    ],
    relatedProducts: ['paraffin-inhibitors', 'demulsifiers']
  },
  {
    slug: 'hydrate-inhibitors',
    title: 'Hydrate Inhibitors',
    icon: 'SnowflakeIcon',
    category: 'production-chemicals',
    shortDescription:
      'Thermodynamic and kinetic inhibitors to prevent gas hydrate formation in low-temperature, high-pressure environments.',
    heroDescription:
      'Comprehensive hydrate management solutions for deepwater and cold climate operations.',
    features: [
      'Thermodynamic inhibitors (MEG, methanol)',
      'Low-dosage hydrate inhibitors (LDHI)',
      'Kinetic and anti-agglomerant technologies',
      'Effective at high subcooling',
      'Regeneration and recovery options',
      'Environmentally acceptable formulations'
    ],
    applications: [
      'Deepwater subsea systems',
      'Gas processing facilities',
      'Long-distance gas pipelines',
      'Cold climate production',
      'Offshore platforms',
      'Gas storage operations'
    ],
    benefits: [
      {
        title: 'Prevent Flow Blockages',
        description: 'Eliminate hydrate plugs that can shut down production.'
      },
      {
        title: 'Enable Deepwater Production',
        description: 'Make subsea tie-backs and long offsets economically viable.'
      },
      {
        title: 'Reduce Chemical Costs',
        description: 'LDHI technology reduces injection volumes by up to 95%.'
      },
      {
        title: 'Improve Safety',
        description: 'Prevent catastrophic pressure events from hydrate blockages.'
      }
    ],
    relatedProducts: ['antifoams', 'corrosion-inhibitors']
  },
  {
    slug: 'calcium-naphthenate-inhibitors',
    title: 'Calcium Naphthenate Inhibitors',
    icon: 'AlertTriangleIcon',
    category: 'production-chemicals',
    shortDescription:
      'Specialty treatments to prevent formation of calcium naphthenate deposits that cause severe operational issues.',
    heroDescription:
      'Targeted solutions to control naphthenate soap formation and maintain production efficiency.',
    features: [
      'Chelating and dispersant chemistries',
      'Prevents interfacial film formation',
      'Effective across pH ranges',
      'Compatible with demulsification programs',
      'Low treat rate requirements',
      'Remediation and prevention modes'
    ],
    applications: [
      'High TAN crude production',
      'Oil-water separation systems',
      'Desalting operations',
      'Export crude handling',
      'Blending facilities',
      'Refinery crude units'
    ],
    benefits: [
      {
        title: 'Prevent Fouling',
        description: 'Eliminate sticky naphthenate deposits in separation equipment.'
      },
      {
        title: 'Improve Separation',
        description: 'Break stable emulsions caused by naphthenate films.'
      },
      {
        title: 'Reduce Downtime',
        description: 'Minimize cleaning frequency and equipment shutdowns.'
      },
      {
        title: 'Enable Production',
        description: 'Make high-acid crude production economically viable.'
      }
    ],
    relatedProducts: ['demulsifiers', 'scale-inhibitors']
  },
  {
    slug: 'h2s-scavengers',
    title: 'Hydrogen Sulphide Scavengers',
    icon: 'WindIcon',
    category: 'production-chemicals',
    shortDescription:
      'Fast-acting treatments to safely and effectively remove hydrogen sulfide, ensuring personnel safety and meeting pipeline specifications.',
    heroDescription:
      'Efficient and reliable H2S mitigation solutions to ensure safety, meet specifications, and protect infrastructure.',
    features: [
      'Triazine and non-triazine based scavengers',
      'Fast reaction kinetics',
      'High H2S capacity per gallon',
      'Liquid and gas phase applications',
      'Formulations to minimize scaling and fouling',
      'Winterized blends for cold climates'
    ],
    applications: [
      'Gas gathering and transmission lines',
      'Contact towers and bubble towers',
      'Crude oil storage and transport',
      'Water treatment facilities',
      'Refinery flare gas recovery',
      'Vapor recovery units (VRU)'
    ],
    benefits: [
      {
        title: 'Ensure Personnel Safety',
        description: 'Rapidly reduce H2S to safe levels for operators and surrounding communities.'
      },
      {
        title: 'Meet Sales Specifications',
        description: 'Reliably achieve pipeline and export H2S limits.'
      },
      {
        title: 'Reduce Corrosion',
        description: 'Mitigate the corrosive effects of H2S on infrastructure.'
      },
      {
        title: 'Minimize Operational Issues',
        description: 'Advanced formulations reduce the risk of scavenger-induced scaling or fouling.'
      }
    ],
    relatedProducts: ['biocides', 'corrosion-inhibitors', 'oxygen-scavengers']
  },
  {
    slug: 'oxygen-scavengers',
    title: 'Oxygen Scavengers',
    icon: 'CircleDotIcon',
    category: 'production-chemicals',
    shortDescription:
      'Chemical treatments that remove dissolved oxygen to prevent corrosion and ensure system integrity.',
    heroDescription:
      'Effective oxygen removal solutions to protect assets from oxygen-induced corrosion.',
    features: [
      'Sulfite and organic-based chemistries',
      'Rapid oxygen consumption',
      'Catalyzed formulations for low temperature',
      'Compatible with production systems',
      'Non-toxic and biodegradable options',
      'Real-time dissolved oxygen monitoring'
    ],
    applications: [
      'Water injection systems',
      'Boiler feedwater treatment',
      'Closed-loop cooling systems',
      'Pipeline filling and commissioning',
      'Hydrotesting operations',
      'Steam generation systems'
    ],
    benefits: [
      {
        title: 'Prevent Oxygen Corrosion',
        description: 'Eliminate pitting and general corrosion caused by dissolved oxygen.'
      },
      {
        title: 'Extend Equipment Life',
        description: 'Protect pumps, vessels, and piping from oxygen attack.'
      },
      {
        title: 'Reduce Maintenance',
        description: 'Minimize corrosion-related repairs and replacements.'
      },
      {
        title: 'Improve Efficiency',
        description: 'Maintain heat transfer efficiency in boilers and heat exchangers.'
      }
    ],
    relatedProducts: ['corrosion-inhibitors', 'biocides']
  },
  {
    slug: 'antifoams',
    title: 'Antifoams',
    icon: 'BubbleIcon',
    category: 'production-chemicals',
    shortDescription:
      'Preventive foam control agents that inhibit foam formation in production and processing systems.',
    heroDescription:
      'Proactive foam prevention solutions to maintain operational efficiency and product quality.',
    features: [
      'Silicone and organic polymer-based',
      'Prevents foam nucleation',
      'Effective at low concentrations',
      'Compatible with process fluids',
      'Temperature and pH stable',
      'Persistent foam prevention'
    ],
    applications: [
      'Oil-gas separators',
      'Amine treating units',
      'Produced water systems',
      'Gas processing plants',
      'Storage tanks',
      'Transportation pipelines'
    ],
    benefits: [
      {
        title: 'Prevent Process Upsets',
        description: 'Maintain stable operations and prevent foam-related shutdowns.'
      },
      {
        title: 'Optimize Capacity',
        description: 'Maximize equipment throughput without foam limitations.'
      },
      {
        title: 'Improve Product Quality',
        description: 'Prevent foam-related contamination and carryover.'
      },
      {
        title: 'Reduce Chemical Costs',
        description: 'Preventive treatment uses less chemical than reactive defoaming.'
      }
    ],
    relatedProducts: ['defoamers', 'demulsifiers']
  },
  {
    slug: 'defoamers',
    title: 'Defoamers',
    icon: 'SprayCanIcon',
    category: 'production-chemicals',
    shortDescription:
      'Rapid foam knockdown agents for immediate control of existing foam in production operations.',
    heroDescription:
      'Fast-acting foam control solutions for emergency response and continuous treatment.',
    features: [
      'Silicone and non-silicone chemistries',
      'Instant foam collapse',
      'High shear stability',
      'Broad compatibility',
      'Liquid and solid formulations',
      'Effective in diverse conditions'
    ],
    applications: [
      'Gas-oil separation plants (GOSP)',
      'Compressor suction scrubbers',
      'Crude oil storage',
      'Foam flooding recovery',
      'Process vessels',
      'Emergency foam control'
    ],
    benefits: [
      {
        title: 'Rapid Response',
        description: 'Immediately collapse foam during upsets or process changes.'
      },
      {
        title: 'Restore Operations',
        description: 'Quickly return to normal operating conditions after foam events.'
      },
      {
        title: 'Prevent Carryover',
        description: 'Protect downstream equipment from foam-related damage.'
      },
      {
        title: 'Versatile Application',
        description: 'Effective across wide range of temperatures and process conditions.'
      }
    ],
    relatedProducts: ['antifoams', 'demulsifiers']
  },
  {
    slug: 'pour-point-depressants',
    title: 'Pour Point Depressants',
    icon: 'ThermometerSnowflakeIcon',
    category: 'production-chemicals',
    shortDescription:
      'Specialty polymers that lower the pour point of crude oil, enabling flow in cold environments.',
    heroDescription:
      'Advanced wax crystal modification technology for cold weather crude oil production and transportation.',
    features: [
      'EVA and methacrylate copolymers',
      'Crystal modification mechanism',
      'Significant pour point reduction',
      'Compatible with crude oils',
      'Cold flow improvers',
      'Winterization additives'
    ],
    applications: [
      'Cold climate production',
      'Arctic and offshore operations',
      'Pipeline transportation',
      'Marine crude shipping',
      'Storage tank bottoms',
      'Rail and truck transport'
    ],
    benefits: [
      {
        title: 'Enable Cold Weather Operations',
        description: 'Maintain crude pumpability in sub-zero temperatures.'
      },
      {
        title: 'Reduce Heating Requirements',
        description: 'Lower energy costs by reducing thermal treatment needs.'
      },
      {
        title: 'Prevent Gelation',
        description: 'Avoid costly restart procedures after cold shutdowns.'
      },
      {
        title: 'Extend Operating Season',
        description: 'Enable year-round production in seasonal climates.'
      }
    ],
    relatedProducts: ['paraffin-inhibitors', 'hydrate-inhibitors']
  },
  {
    slug: 'oil-spill-dispersants',
    title: 'Oil Spill Dispersants',
    icon: 'WavesIcon',
    category: 'production-chemicals',
    shortDescription:
      'Emergency response chemicals for rapid dispersion of oil spills to minimize environmental impact.',
    heroDescription:
      'Approved dispersant formulations for effective oil spill response and environmental protection.',
    features: [
      'EPA and regional agency approved',
      'Surfactant-based formulations',
      'Effective on crude and refined products',
      'Aerial and vessel application',
      'Rapid oil droplet formation',
      'Enhanced biodegradation'
    ],
    applications: [
      'Offshore spill response',
      'Nearshore and coastal incidents',
      'Pipeline release mitigation',
      'Storage tank spills',
      'Marine terminal operations',
      'Emergency response preparedness'
    ],
    benefits: [
      {
        title: 'Minimize Environmental Damage',
        description: 'Accelerate natural biodegradation and reduce shoreline impact.'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Meet government-approved response protocols and requirements.'
      },
      {
        title: 'Rapid Response',
        description: 'Quick deployment capabilities for time-critical incidents.'
      },
      {
        title: 'Versatile Application',
        description: 'Effective across range of oil types and environmental conditions.'
      }
    ],
    relatedProducts: ['demulsifiers', 'water-clarifiers']
  },

  // DRILLING CHEMICALS
  {
    slug: 'barite',
    title: 'Barite',
    icon: 'MountainIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'High-density weighting agent for drilling fluids, providing hydrostatic pressure control and wellbore stability.',
    heroDescription:
      'Premium-grade barium sulfate for density control in all drilling fluid systems.',
    features: [
      'API gravity 4.2 specification compliant',
      'Low soluble salts content',
      'Consistent particle size distribution',
      'Minimal abrasiveness',
      'Chemically inert',
      'Global supply availability'
    ],
    applications: [
      'Water-based mud systems',
      'Oil-based mud systems',
      'Synthetic-based mud systems',
      'Drilling deeper wells',
      'High-pressure formations',
      'Offshore drilling operations'
    ],
    benefits: [
      {
        title: 'Wellbore Stability',
        description: 'Maintain sufficient hydrostatic pressure to prevent kicks and blowouts.'
      },
      {
        title: 'Formation Protection',
        description: 'Control differential sticking and minimize formation damage.'
      },
      {
        title: 'Cost-Effective Weighting',
        description: 'Industry-standard density control at competitive pricing.'
      },
      {
        title: 'Reliable Supply',
        description: 'Consistent quality and availability for uninterrupted operations.'
      }
    ],
    relatedProducts: ['bentonite', 'hematite', 'calcium-carbonate-drilling']
  },
  {
    slug: 'bentonite',
    title: 'Bentonite',
    icon: 'LayersIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Premium sodium and calcium bentonite clays for viscosity control, filtration, and wellbore stabilization.',
    heroDescription:
      'High-quality bentonite drilling clays for superior mud properties and formation protection.',
    features: [
      'Wyoming and regional sodium bentonite',
      'High-yield formulations',
      'Superior colloidal properties',
      'Excellent swelling characteristics',
      'Low fluid loss',
      'API specifications compliant'
    ],
    applications: [
      'Freshwater drilling fluids',
      'Seawater mud systems',
      'Shallow well drilling',
      'Geotechnical applications',
      'HDD and tunneling',
      'Cementing operations'
    ],
    benefits: [
      {
        title: 'Build Viscosity',
        description: 'Create stable gel structure for cuttings suspension and transport.'
      },
      {
        title: 'Control Fluid Loss',
        description: 'Form low-permeability filter cake to minimize formation damage.'
      },
      {
        title: 'Stabilize Formations',
        description: 'Seal permeable zones and prevent wellbore collapse.'
      },
      {
        title: 'Cost-Effective Solution',
        description: 'Economical viscosifier for standard drilling applications.'
      }
    ],
    relatedProducts: ['pac-drilling', 'xanthan-gum', 'starch-drilling']
  },
  {
    slug: 'calcium-carbonate-drilling',
    title: 'Calcium Carbonate',
    icon: 'GemIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Acid-soluble weighting and bridging agent for reservoir drilling and completion fluids.',
    heroDescription:
      'Premium calcium carbonate for formation-friendly drilling and minimal formation damage.',
    features: [
      'Ultra-fine to coarse particle sizes',
      'High purity (>95% CaCO3)',
      'Acid-soluble for easy cleanup',
      'Non-damaging to formations',
      'Controlled particle size distribution',
      'Bright white color'
    ],
    applications: [
      'Reservoir drilling fluids',
      'Completion and workover fluids',
      'Underbalanced drilling',
      'Lost circulation control',
      'Drill-in fluids',
      'Cementing operations'
    ],
    benefits: [
      {
        title: 'Minimize Formation Damage',
        description: 'Acid-soluble particles completely removed during well cleanup.'
      },
      {
        title: 'Maximize Productivity',
        description: 'Preserve reservoir permeability and production potential.'
      },
      {
        title: 'Versatile Applications',
        description: 'Suitable for weighting, bridging, and lost circulation control.'
      },
      {
        title: 'Environmentally Preferred',
        description: 'Natural mineral with minimal environmental impact.'
      }
    ],
    relatedProducts: ['barite', 'starch-drilling', 'pac-drilling']
  },
  {
    slug: 'caustic-soda-drilling',
    title: 'Caustic Soda (Sodium Hydroxide)',
    icon: 'FlaskIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Essential alkalinity source for pH control and clay hydration in water-based drilling fluids.',
    heroDescription:
      'High-purity sodium hydroxide for optimal mud chemistry and performance.',
    features: [
      'Liquid (50%) and solid (flake/pellet) forms',
      'Industrial grade purity',
      'Rapid dissolution',
      'Strong alkalinity source',
      'Compatible with all WBM systems',
      'Bulk and packaged options'
    ],
    applications: [
      'Water-based mud pH control',
      'Bentonite clay activation',
      'Lignite/lignosulfonate treatment',
      'Contaminant removal',
      'Drilling fluid makeup',
      'Cementing operations'
    ],
    benefits: [
      {
        title: 'Optimize Mud Chemistry',
        description: 'Maintain target pH for optimal additive performance.'
      },
      {
        title: 'Activate Bentonite',
        description: 'Ensure maximum clay hydration and yield.'
      },
      {
        title: 'Control Contaminants',
        description: 'Precipitate calcium and magnesium from makeup water.'
      },
      {
        title: 'Cost-Effective Treatment',
        description: 'Economical pH adjustment and alkalinity source.'
      }
    ],
    relatedProducts: ['lime-drilling', 'soda-ash-drilling', 'potassium-chloride']
  },
  {
    slug: 'cellulose-fibers',
    title: 'Cellulose Fibers',
    icon: 'ShrubIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Natural and processed fibers for lost circulation control and seepage prevention.',
    heroDescription:
      'High-performance fibrous materials for effective loss prevention and wellbore strengthening.',
    features: [
      'Fine, medium, and coarse fiber grades',
      'Natural and chemically treated options',
      'High aspect ratio for bridging',
      'Compatible with all mud systems',
      'Non-damaging to formations',
      'Environmentally acceptable'
    ],
    applications: [
      'Lost circulation prevention',
      'Seepage control',
      'Wellbore strengthening',
      'Fracture sealing',
      'Vugular formations',
      'Depleted zone drilling'
    ],
    benefits: [
      {
        title: 'Prevent Lost Circulation',
        description: 'Create effective seals in natural and induced fractures.'
      },
      {
        title: 'Reduce NPT',
        description: 'Minimize costly downtime from fluid losses.'
      },
      {
        title: 'Wellbore Strengthening',
        description: 'Increase effective fracture gradient and drilling window.'
      },
      {
        title: 'Environmentally Friendly',
        description: 'Biodegradable natural materials with low toxicity.'
      }
    ],
    relatedProducts: ['calcium-carbonate-drilling', 'mica', 'bentonite']
  },
  {
    slug: 'deflocculants-thinners',
    title: 'Deflocculants/Thinners',
    icon: 'DropletIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Rheology modifiers that reduce viscosity and gel strength while maintaining cuttings suspension.',
    heroDescription:
      'Advanced dispersants for optimized drilling fluid rheology and hydraulic efficiency.',
    features: [
      'Lignosulfonates and lignites',
      'Synthetic polymers (PHPA, SMP)',
      'Temperature-stable formulations',
      'Calcium and contaminant tolerance',
      'Minimal impact on fluid loss',
      'Compatible with WBM systems'
    ],
    applications: [
      'High-temperature wells',
      'High-solids mud systems',
      'Calcium-contaminated muds',
      'Cement contamination treatment',
      'Rheology control',
      'Hole cleaning optimization'
    ],
    benefits: [
      {
        title: 'Improve Hydraulics',
        description: 'Reduce pump pressure and increase penetration rates.'
      },
      {
        title: 'Control Rheology',
        description: 'Maintain optimal flow properties for efficient drilling.'
      },
      {
        title: 'Tolerate Contaminants',
        description: 'Maintain mud properties despite calcium or cement influx.'
      },
      {
        title: 'High-Temperature Stability',
        description: 'Effective performance in deep, hot wellbores.'
      }
    ],
    relatedProducts: ['bentonite', 'pac-drilling', 'xanthan-gum']
  },
  {
    slug: 'defoamers-drilling',
    title: 'Defoamers (Drilling)',
    icon: 'BubbleIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Antifoam agents for controlling foam in drilling fluids and preventing operational issues.',
    heroDescription:
      'Effective foam control solutions for reliable drilling fluid performance.',
    features: [
      'Silicone and organic-based chemistries',
      'Compatible with all mud systems',
      'Rapid foam knockdown',
      'Long-lasting performance',
      'Low treat rates',
      'Temperature stable'
    ],
    applications: [
      'Air/gas drilling operations',
      'Foam-prone water sources',
      'Aerated drilling fluids',
      'Degasser units',
      'Mud pits and tanks',
      'Circulating systems'
    ],
    benefits: [
      {
        title: 'Prevent Foam Issues',
        description: 'Eliminate foam-related pump cavitation and flow measurement errors.'
      },
      {
        title: 'Improve Separation',
        description: 'Enhance solids control equipment efficiency.'
      },
      {
        title: 'Maintain Density Control',
        description: 'Prevent aerated mud from reducing effective mud weight.'
      },
      {
        title: 'Protect Equipment',
        description: 'Prevent foam carryover damage to pumps and surface equipment.'
      }
    ],
    relatedProducts: ['drilling-lubricants', 'bentonite']
  },
  {
    slug: 'drilling-lubricants',
    title: 'Drilling Lubricants',
    icon: 'DropIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Friction-reducing additives for extended reach, directional, and horizontal drilling operations.',
    heroDescription:
      'Advanced lubricity enhancers to reduce torque, drag, and differential sticking.',
    features: [
      'Synthetic and oil-based lubricants',
      'Water-soluble and oil-soluble options',
      'Extreme pressure (EP) additives',
      'Compatible with WBM and OBM',
      'Biodegradable formulations',
      'High-temperature stability'
    ],
    applications: [
      'Extended reach drilling',
      'Horizontal and directional wells',
      'Tight hole conditions',
      'Differential sticking prevention',
      'High-angle drilling',
      'Sliding and rotating drilling'
    ],
    benefits: [
      {
        title: 'Reduce Torque and Drag',
        description: 'Lower rotational and pulling forces by up to 50%.'
      },
      {
        title: 'Extend Reach',
        description: 'Enable longer horizontal and extended reach wells.'
      },
      {
        title: 'Prevent Pipe Sticking',
        description: 'Minimize differential sticking in permeable formations.'
      },
      {
        title: 'Improve ROP',
        description: 'Increase drilling efficiency and reduce bit wear.'
      }
    ],
    relatedProducts: ['bentonite', 'pac-drilling', 'xanthan-gum']
  },
  {
    slug: 'glycols-drilling',
    title: 'Glycols (Drilling)',
    icon: 'TestTubeIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Polyglycols for shale inhibition, lubricity, and thermal stability in water-based drilling fluids.',
    heroDescription:
      'High-performance glycol systems for challenging shale and reactive formation drilling.',
    features: [
      'Polyethylene glycol (PEG)',
      'Polypropylene glycol (PPG)',
      'Shale encapsulation mechanism',
      'Compatible with high-salinity muds',
      'Temperature-stable formulations',
      'Environmentally acceptable'
    ],
    applications: [
      'Reactive shale drilling',
      'Water-sensitive formations',
      'High-temperature wells',
      'Horizontal shale wells',
      'Sloughing shale sections',
      'Wellbore stability challenges'
    ],
    benefits: [
      {
        title: 'Stabilize Shale Formations',
        description: 'Prevent hydration, swelling, and dispersion of reactive clays.'
      },
      {
        title: 'Reduce Dilution',
        description: 'Minimize water influx and maintain mud properties.'
      },
      {
        title: 'Improve Lubricity',
        description: 'Reduce torque and drag in horizontal sections.'
      },
      {
        title: 'Environmental Advantages',
        description: 'Lower toxicity alternative to oil-based mud systems.'
      }
    ],
    relatedProducts: ['potassium-chloride', 'pac-drilling', 'bentonite']
  },
  {
    slug: 'hematite',
    title: 'Hematite',
    icon: 'MountainSnowIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Ultra-high-density iron oxide weighting agent for extreme HTHP and deepwater drilling.',
    heroDescription:
      'Premium hematite for demanding high-pressure, high-temperature applications.',
    features: [
      'Specific gravity 5.0-5.2',
      'Micronized particle size',
      'Low abrasiveness',
      'Minimal solids loading',
      'Non-magnetic grade available',
      'HTHP stable'
    ],
    applications: [
      'HTHP deepwater drilling',
      'Ultra-deep wells',
      'Slim-hole drilling',
      'Lost circulation zones',
      'Narrow mud weight windows',
      'Managed pressure drilling (MPD)'
    ],
    benefits: [
      {
        title: 'Achieve Extreme Densities',
        description: 'Reach mud weights up to 23 ppg with lower solids content.'
      },
      {
        title: 'Reduce Hydraulic Issues',
        description: 'Lower solids volume improves rheology and ECD management.'
      },
      {
        title: 'Minimize Formation Damage',
        description: 'Fine particle size reduces invasion and permeability impairment.'
      },
      {
        title: 'Enable Deepwater Drilling',
        description: 'Critical for narrow margin operations in ultra-deep wells.'
      }
    ],
    relatedProducts: ['barite', 'deflocculants-thinners', 'pac-drilling']
  },
  {
    slug: 'lime-drilling',
    title: 'Lime (Calcium Hydroxide)',
    icon: 'BeakerIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Essential alkalinity and calcium source for lime-based and saturated salt drilling fluids.',
    heroDescription:
      'High-purity calcium hydroxide for specialized water-based mud systems.',
    features: [
      'Slaked lime (Ca(OH)2)',
      'High purity (>90% available lime)',
      'Fine particle size',
      'Rapid hydration',
      'Compatible with WBM systems',
      'Industrial grade quality'
    ],
    applications: [
      'Lime mud systems',
      'Gyp-treated muds',
      'Saturated salt muds',
      'Cement contamination treatment',
      'pH control',
      'Calcium source for special muds'
    ],
    benefits: [
      {
        title: 'Control pH and Alkalinity',
        description: 'Maintain optimal chemistry for additive performance.'
      },
      {
        title: 'Calcium Tolerance',
        description: 'Enable drilling through anhydrite, gypsum, and cement zones.'
      },
      {
        title: 'Flocculation Control',
        description: 'Manage rheology in calcium-contaminated systems.'
      },
      {
        title: 'Cost-Effective Treatment',
        description: 'Economical solution for specialized mud requirements.'
      }
    ],
    relatedProducts: ['caustic-soda-drilling', 'bentonite', 'deflocculants-thinners']
  },
  {
    slug: 'mica',
    title: 'Mica',
    icon: 'ShapesIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Platelet-shaped lost circulation material for seepage and fracture sealing.',
    heroDescription:
      'High-aspect-ratio mica flakes for effective lost circulation prevention.',
    features: [
      'Fine, medium, and coarse grades',
      'High aspect ratio platelets',
      'Flexible bridging action',
      'Non-damaging to formations',
      'Chemically inert',
      'Compatible with all mud systems'
    ],
    applications: [
      'Lost circulation prevention',
      'Naturally fractured formations',
      'Vugular carbonates',
      'Depleted zones',
      'Wellbore strengthening',
      'Seepage control'
    ],
    benefits: [
      {
        title: 'Effective Bridging',
        description: 'Platelet shape creates strong seals across fractures.'
      },
      {
        title: 'Versatile LCM',
        description: 'Effective across wide range of fracture widths.'
      },
      {
        title: 'Formation Friendly',
        description: 'Minimal impact on reservoir quality and productivity.'
      },
      {
        title: 'Reduce NPT',
        description: 'Prevent costly lost circulation events and remediation.'
      }
    ],
    relatedProducts: ['cellulose-fibers', 'calcium-carbonate-drilling', 'bentonite']
  },
  {
    slug: 'pac-drilling',
    title: 'PAC (Polyanionic Cellulose)',
    icon: 'NetworkIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Premium cellulose polymer for viscosity building, fluid loss control, and shale stabilization.',
    heroDescription:
      'High-quality PAC for superior drilling fluid performance and formation protection.',
    features: [
      'Low viscosity (LV-PAC)',
      'High viscosity (HV-PAC/R-PAC)',
      'Temperature stable to 300°F+',
      'Salt and contaminant tolerant',
      'Minimal impact on rheology',
      'Effective fluid loss control'
    ],
    applications: [
      'Water-based mud systems',
      'High-temperature wells',
      'Shale stabilization',
      'Fluid loss control',
      'Completion fluids',
      'Salt-saturated systems'
    ],
    benefits: [
      {
        title: 'Superior Fluid Loss Control',
        description: 'Form thin, impermeable filter cake to protect formations.'
      },
      {
        title: 'Shale Inhibition',
        description: 'Encapsulate and stabilize reactive shale formations.'
      },
      {
        title: 'Temperature Stability',
        description: 'Maintain performance in high-temperature environments.'
      },
      {
        title: 'Versatile Applications',
        description: 'Effective in fresh, brackish, and saturated salt muds.'
      }
    ],
    relatedProducts: ['bentonite', 'xanthan-gum', 'starch-drilling']
  },
  {
    slug: 'potassium-chloride',
    title: 'Potassium Chloride (KCl)',
    icon: 'BoxIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Essential shale inhibitor for drilling reactive formations and maintaining wellbore stability.',
    heroDescription:
      'High-purity potassium chloride for effective shale inhibition and water activity control.',
    features: [
      'Industrial and technical grades',
      'Granular and powder forms',
      '>95% KCl purity',
      'Rapid dissolution',
      'Compatible with all WBM additives',
      'Bulk and bagged supply'
    ],
    applications: [
      'Shale drilling operations',
      'Water-based mud systems',
      'Polymer muds (KCl/Poly)',
      'Reactive clay formations',
      'Wellbore stability programs',
      'Completion and workover fluids'
    ],
    benefits: [
      {
        title: 'Prevent Shale Swelling',
        description: 'Lower water activity to inhibit clay hydration and dispersion.'
      },
      {
        title: 'Improve Wellbore Stability',
        description: 'Minimize sloughing, caving, and tight hole conditions.'
      },
      {
        title: 'Enhance ROP',
        description: 'Faster drilling in shale sections with stable hole conditions.'
      },
      {
        title: 'Cost-Effective Inhibition',
        description: 'Economical alternative to oil-based mud in many applications.'
      }
    ],
    relatedProducts: ['pac-drilling', 'glycols-drilling', 'bentonite']
  },
  {
    slug: 'soda-ash-drilling',
    title: 'Soda Ash (Sodium Carbonate)',
    icon: 'FlaskConicalIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Versatile treatment for calcium removal, pH control, and mud property optimization.',
    heroDescription:
      'High-purity sodium carbonate for water treatment and mud conditioning.',
    features: [
      'Light and dense grades',
      '>99% Na2CO3 purity',
      'Rapid dissolution',
      'Calcium precipitation',
      'pH buffering capability',
      'Bulk and bagged packaging'
    ],
    applications: [
      'Makeup water treatment',
      'Calcium contamination removal',
      'pH adjustment',
      'Bentonite pretreatment',
      'Gyp contamination treatment',
      'Drilling fluid preparation'
    ],
    benefits: [
      {
        title: 'Remove Calcium Hardness',
        description: 'Precipitate calcium as insoluble carbonate for easy removal.'
      },
      {
        title: 'Optimize Bentonite Performance',
        description: 'Treat makeup water for maximum clay yield and viscosity.'
      },
      {
        title: 'Control pH',
        description: 'Maintain target pH range for additive effectiveness.'
      },
      {
        title: 'Cost-Effective Treatment',
        description: 'Economical solution for water conditioning and contamination control.'
      }
    ],
    relatedProducts: ['caustic-soda-drilling', 'lime-drilling', 'bentonite']
  },
  {
    slug: 'sodium-chloride-drilling',
    title: 'Sodium Chloride (NaCl)',
    icon: 'SaltIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Essential salt for saturated brine systems, shale inhibition, and density control.',
    heroDescription:
      'Industrial-grade sodium chloride for salt-based drilling fluid systems.',
    features: [
      'Industrial salt (>99% NaCl)',
      'Granular and powder forms',
      'Low-insolubles specification',
      'Rapid dissolution',
      'Compatible with all mud systems',
      'Bulk truck and rail delivery'
    ],
    applications: [
      'Saturated salt mud systems',
      'Salt section drilling',
      'Shale inhibition',
      'Completion and workover brines',
      'High-density clear brines',
      'Formation damage prevention'
    ],
    benefits: [
      {
        title: 'Prevent Salt Dissolution',
        description: 'Saturated brine prevents washout of salt formations.'
      },
      {
        title: 'Shale Stabilization',
        description: 'Control water activity to inhibit reactive shales.'
      },
      {
        title: 'Formation Protection',
        description: 'Salt-saturated fluids minimize formation damage in sensitive zones.'
      },
      {
        title: 'Cost-Effective System',
        description: 'Economical fluid for salt drilling and high-chloride environments.'
      }
    ],
    relatedProducts: ['potassium-chloride', 'calcium-carbonate-drilling', 'bentonite']
  },
  {
    slug: 'starch-drilling',
    title: 'Starch (Modified Starch)',
    icon: 'WheatIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Biodegradable fluid loss additive for drilling and completion operations.',
    heroDescription:
      'Environmentally preferred starch polymers for effective filtration control.',
    features: [
      'Modified and pregelatinized grades',
      'Temperature stable formulations',
      'Compatible with WBM systems',
      'Biodegradable and non-toxic',
      'Effective at low concentrations',
      'Minimal viscosity impact'
    ],
    applications: [
      'Water-based drilling fluids',
      'Completion fluids',
      'Workover operations',
      'Environmentally sensitive areas',
      'Offshore drilling',
      'Freshwater and seawater muds'
    ],
    benefits: [
      {
        title: 'Control Fluid Loss',
        description: 'Build thin filter cake to minimize invasion and formation damage.'
      },
      {
        title: 'Environmentally Preferred',
        description: 'Biodegradable alternative to synthetic polymers.'
      },
      {
        title: 'Formation Protection',
        description: 'Minimize filtrate invasion and preserve reservoir quality.'
      },
      {
        title: 'Cost-Effective',
        description: 'Economical fluid loss control for standard applications.'
      }
    ],
    relatedProducts: ['pac-drilling', 'bentonite', 'calcium-carbonate-drilling']
  },
  {
    slug: 'xanthan-gum',
    title: 'Xanthan Gum',
    icon: 'DnaIcon',
    category: 'drilling-chemicals',
    shortDescription:
      'Biopolymer viscosifier for cuttings suspension, hole cleaning, and low-solids mud systems.',
    heroDescription:
      'Premium xanthan gum for superior rheology control and cuttings transport.',
    features: [
      'High molecular weight biopolymer',
      'Excellent suspension properties',
      'Shear-thinning behavior',
      'Temperature and salt tolerant',
      'Low solids mud systems',
      'Compatible with all WBM additives'
    ],
    applications: [
      'Low-solids mud systems',
      'Extended reach drilling',
      'Horizontal drilling',
      'Coiled tubing operations',
      'High-angle hole sections',
      'Workover and completion fluids'
    ],
    benefits: [
      {
        title: 'Superior Hole Cleaning',
        description: 'Excellent cuttings suspension and transport in high-angle wells.'
      },
      {
        title: 'Minimize Formation Damage',
        description: 'Low-solids systems reduce filtrate invasion and impairment.'
      },
      {
        title: 'Improve Hydraulics',
        description: 'Shear-thinning rheology optimizes pump pressure and ROP.'
      },
      {
        title: 'Versatile Performance',
        description: 'Effective across wide range of temperatures and salinities.'
      }
    ],
    relatedProducts: ['pac-drilling', 'bentonite', 'deflocculants-thinners']
  },

  // COMMODITY CHEMICALS
  {
    slug: 'acetates',
    title: 'Acetates',
    icon: 'TestTubesIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium, potassium, and calcium acetates for pH buffering, corrosion control, and specialty applications.',
    heroDescription:
      'High-purity acetate salts for diverse industrial and oilfield applications.',
    features: [
      'Sodium acetate (anhydrous and trihydrate)',
      'Potassium acetate',
      'Calcium acetate',
      'Food and technical grades',
      'Buffering and pH control',
      'Low toxicity'
    ],
    applications: [
      'pH buffering and control',
      'Corrosion inhibitor formulations',
      'Completion fluid additives',
      'De-icing and anti-icing',
      'Biocide formulations',
      'Water treatment'
    ],
    benefits: [
      {
        title: 'Effective pH Control',
        description: 'Stable buffering capacity across wide pH range.'
      },
      {
        title: 'Corrosion Mitigation',
        description: 'Component of corrosion inhibitor packages.'
      },
      {
        title: 'Low Environmental Impact',
        description: 'Biodegradable and low toxicity for sensitive applications.'
      },
      {
        title: 'Versatile Chemistry',
        description: 'Multiple applications across production and drilling.'
      }
    ],
    relatedProducts: ['citrates', 'carbonates', 'phosphates']
  },
  {
    slug: 'acids',
    title: 'Acids',
    icon: 'DropletIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Industrial acids including hydrochloric, sulfuric, acetic, and citric for stimulation and treatment operations.',
    heroDescription:
      'Technical-grade acids for well stimulation, cleaning, and chemical treatment.',
    features: [
      'Hydrochloric acid (15-32%)',
      'Sulfuric acid (93-98%)',
      'Acetic acid (glacial and dilute)',
      'Citric acid (anhydrous and monohydrate)',
      'Inhibited formulations',
      'Bulk and packaged delivery'
    ],
    applications: [
      'Matrix acidizing',
      'Acid fracturing',
      'Scale removal',
      'Equipment cleaning',
      'pH adjustment',
      'Chemical neutralization'
    ],
    benefits: [
      {
        title: 'Enhance Production',
        description: 'Dissolve formation damage and improve well productivity.'
      },
      {
        title: 'Remove Deposits',
        description: 'Effective scale and mineral deposit removal.'
      },
      {
        title: 'Versatile Applications',
        description: 'Wide range of acidizing and cleaning operations.'
      },
      {
        title: 'Inhibited Formulations',
        description: 'Protected systems minimize corrosion during treatments.'
      }
    ],
    relatedProducts: ['citrates', 'solvents', 'corrosion-inhibitors']
  },
  {
    slug: 'alcohols',
    title: 'Alcohols',
    icon: 'WineIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Methanol, ethanol, and isopropanol for hydrate inhibition, solvents, and chemical synthesis.',
    heroDescription:
      'Industrial-grade alcohols for production chemicals and specialty applications.',
    features: [
      'Methanol (99.9% purity)',
      'Ethanol (anhydrous and denatured)',
      'Isopropanol (IPA)',
      'Various blends and grades',
      'Bulk storage and delivery',
      'Hazmat handling compliance'
    ],
    applications: [
      'Thermodynamic hydrate inhibition',
      'Gas dehydration',
      'Solvent applications',
      'Chemical intermediates',
      'Heat transfer fluids',
      'Pipeline commissioning'
    ],
    benefits: [
      {
        title: 'Prevent Hydrate Formation',
        description: 'Effective thermodynamic inhibition in gas systems.'
      },
      {
        title: 'Dehydration Performance',
        description: 'Remove water from gas streams and products.'
      },
      {
        title: 'Versatile Solvents',
        description: 'Wide compatibility for formulation and cleaning applications.'
      },
      {
        title: 'Regenerable Systems',
        description: 'Methanol can be recovered and reused to reduce costs.'
      }
    ],
    relatedProducts: ['glycols', 'ethanol', 'solvents']
  },
  {
    slug: 'amines',
    title: 'Amines',
    icon: 'AtomIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Monoethanolamine (MEA), diethanolamine (DEA), and specialty amines for gas treating and pH control.',
    heroDescription:
      'High-purity amines for acid gas removal and chemical treatment.',
    features: [
      'Monoethanolamine (MEA)',
      'Diethanolamine (DEA)',
      'Methyldiethanolamine (MDEA)',
      'Triethanolamine (TEA)',
      'Industrial and technical grades',
      'Bulk liquid delivery'
    ],
    applications: [
      'CO2 and H2S removal',
      'Gas sweetening operations',
      'pH adjustment',
      'Corrosion inhibitor intermediates',
      'Chemical synthesis',
      'Refinery treating units'
    ],
    benefits: [
      {
        title: 'Effective Gas Treating',
        description: 'Selective removal of acid gases from natural gas and refinery streams.'
      },
      {
        title: 'Regenerable Solutions',
        description: 'Heat-stable amine systems can be thermally regenerated.'
      },
      {
        title: 'pH Control',
        description: 'Effective alkalinity source for various applications.'
      },
      {
        title: 'Chemical Building Blocks',
        description: 'Essential intermediates for specialty chemical production.'
      }
    ],
    relatedProducts: ['caustic-soda-drilling', 'alcohols', 'glycols']
  },
  {
    slug: 'bromides',
    title: 'Bromides',
    icon: 'CircleIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Calcium, sodium, and zinc bromide for high-density clear brine completion and workover fluids.',
    heroDescription:
      'Ultra-high-density bromide brines for demanding well completion operations.',
    features: [
      'Calcium bromide (CaBr2)',
      'Sodium bromide (NaBr)',
      'Zinc bromide (ZnBr2)',
      'Densities up to 19.2 ppg',
      'Crystal clear solutions',
      'Corrosion inhibitor compatible'
    ],
    applications: [
      'Completion fluids',
      'Workover operations',
      'Packer fluids',
      'Well control',
      'Drill-in fluids',
      'Formation damage prevention'
    ],
    benefits: [
      {
        title: 'High-Density Capability',
        description: 'Achieve extreme fluid densities in solids-free systems.'
      },
      {
        title: 'Formation Protection',
        description: 'Crystal-clear brines minimize formation damage and maximize productivity.'
      },
      {
        title: 'Wellbore Stability',
        description: 'Provide overbalance pressure without solids invasion.'
      },
      {
        title: 'Temperature Stable',
        description: 'Maintain properties in HTHP downhole conditions.'
      }
    ],
    relatedProducts: ['chlorides', 'formates', 'calcium-carbonate-drilling']
  },
  {
    slug: 'carbonates',
    title: 'Carbonates',
    icon: 'FlaskRoundIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium, potassium, and calcium carbonates for pH control, water treatment, and specialty applications.',
    heroDescription:
      'Industrial carbonate salts for diverse chemical treatment operations.',
    features: [
      'Sodium carbonate (soda ash)',
      'Potassium carbonate',
      'Calcium carbonate (ground)',
      'Light and dense grades',
      'High purity formulations',
      'Bulk and bagged supply'
    ],
    applications: [
      'pH adjustment and buffering',
      'Water softening',
      'Scale inhibitor formulations',
      'Drilling fluid additives',
      'Neutralization',
      'Chemical synthesis'
    ],
    benefits: [
      {
        title: 'Effective pH Control',
        description: 'Stable alkalinity source for process optimization.'
      },
      {
        title: 'Water Treatment',
        description: 'Remove hardness and condition makeup water.'
      },
      {
        title: 'Chemical Versatility',
        description: 'Key ingredient in multiple treatment formulations.'
      },
      {
        title: 'Cost-Effective',
        description: 'Economical solution for pH and alkalinity management.'
      }
    ],
    relatedProducts: ['caustic-soda-drilling', 'soda-ash-drilling', 'bicarbonates']
  },
  {
    slug: 'chlorides',
    title: 'Chlorides',
    icon: 'HexagonIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium, potassium, calcium, and magnesium chlorides for brines, shale inhibition, and chemical treatment.',
    heroDescription:
      'High-purity chloride salts for completion fluids and specialty applications.',
    features: [
      'Sodium chloride (NaCl)',
      'Potassium chloride (KCl)',
      'Calcium chloride (CaCl2)',
      'Magnesium chloride (MgCl2)',
      'Technical and food grades',
      'Liquid and solid forms'
    ],
    applications: [
      'Clear brine fluids',
      'Shale stabilization',
      'Completion and workover operations',
      'Packer fluids',
      'Freeze point depression',
      'Chemical intermediates'
    ],
    benefits: [
      {
        title: 'Versatile Brine Systems',
        description: 'Wide density range from 8.4 to 14.5 ppg with chloride salts.'
      },
      {
        title: 'Shale Inhibition',
        description: 'Control water activity to stabilize reactive formations.'
      },
      {
        title: 'Formation Compatibility',
        description: 'Minimize formation damage in sensitive reservoirs.'
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Economical fluids for completion and workover operations.'
      }
    ],
    relatedProducts: ['bromides', 'formates', 'potassium-chloride']
  },
  {
    slug: 'citrates',
    title: 'Citrates',
    icon: 'LemonIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium and potassium citrates for chelation, buffering, and scale inhibition applications.',
    heroDescription:
      'Food-grade and technical citrate salts for environmentally sensitive operations.',
    features: [
      'Sodium citrate (anhydrous and dihydrate)',
      'Potassium citrate',
      'Citric acid derivatives',
      'Food and technical grades',
      'Chelating properties',
      'Biodegradable'
    ],
    applications: [
      'Iron control in acidizing',
      'Chelating agent',
      'Scale inhibitor component',
      'pH buffering',
      'Environmentally sensitive areas',
      'Completion fluid additives'
    ],
    benefits: [
      {
        title: 'Iron Precipitation Control',
        description: 'Prevent damaging iron precipitates after acidizing treatments.'
      },
      {
        title: 'Environmental Profile',
        description: 'Biodegradable and food-grade options for sensitive operations.'
      },
      {
        title: 'Effective Chelation',
        description: 'Sequester metal ions to improve treatment performance.'
      },
      {
        title: 'Versatile Applications',
        description: 'Multiple uses across stimulation and production.'
      }
    ],
    relatedProducts: ['acids', 'acetates', 'phosphates']
  },
  {
    slug: 'coagulants',
    title: 'Coagulants',
    icon: 'DropIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Aluminum sulfate (alum), ferric chloride, and polyaluminum chloride for water clarification.',
    heroDescription:
      'Industrial coagulants for produced water treatment and clarification.',
    features: [
      'Aluminum sulfate (alum)',
      'Ferric chloride',
      'Ferric sulfate',
      'Polyaluminum chloride (PAC)',
      'Liquid and dry formulations',
      'Various concentrations'
    ],
    applications: [
      'Produced water treatment',
      'Oil-water separation',
      'Suspended solids removal',
      'Turbidity reduction',
      'Clarification processes',
      'Discharge water treatment'
    ],
    benefits: [
      {
        title: 'Effective Clarification',
        description: 'Rapidly destabilize and agglomerate suspended particles.'
      },
      {
        title: 'Meet Discharge Standards',
        description: 'Achieve regulatory limits for oil-in-water and TSS.'
      },
      {
        title: 'Optimize Treatment',
        description: 'Improve performance of downstream separation equipment.'
      },
      {
        title: 'Cost-Effective',
        description: 'Economical primary treatment for water clarification.'
      }
    ],
    relatedProducts: ['flocculants', 'water-clarifiers', 'polymers']
  },
  {
    slug: 'ethanol',
    title: 'Ethanol',
    icon: 'BeakerIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Anhydrous and denatured ethanol for solvents, hydrate inhibition, and chemical synthesis.',
    heroDescription:
      'High-purity ethanol for industrial and oilfield applications.',
    features: [
      'Anhydrous ethanol (99.5%+)',
      'Denatured ethanol',
      'Food-grade and industrial grades',
      'Various denaturants available',
      'Bulk and packaged supply',
      'Renewable sourcing'
    ],
    applications: [
      'Solvent applications',
      'Chemical intermediates',
      'Hydrate inhibition',
      'Gas dehydration',
      'Surface cleaning',
      'Biofuel blending'
    ],
    benefits: [
      {
        title: 'Effective Solvent',
        description: 'Excellent dissolution properties for diverse applications.'
      },
      {
        title: 'Renewable Source',
        description: 'Sustainable alternative to petroleum-derived solvents.'
      },
      {
        title: 'Low Toxicity',
        description: 'Preferred over methanol in many applications for safety.'
      },
      {
        title: 'Multiple Grades',
        description: 'Options from industrial to USP/food-grade quality.'
      }
    ],
    relatedProducts: ['alcohols', 'glycols', 'solvents']
  },
  {
    slug: 'flocculants',
    title: 'Flocculants',
    icon: 'NetworkIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Anionic, cationic, and nonionic polymers for enhanced water clarification and solids separation.',
    heroDescription:
      'High molecular weight flocculant polymers for superior water treatment performance.',
    features: [
      'Anionic polyacrylamides',
      'Cationic polymers',
      'Nonionic flocculants',
      'Emulsion and dry powder forms',
      'Variable charge density',
      'High molecular weight'
    ],
    applications: [
      'Produced water treatment',
      'Drilling mud dewatering',
      'Tailings management',
      'Clarification processes',
      'Sludge dewatering',
      'Enhanced oil recovery'
    ],
    benefits: [
      {
        title: 'Rapid Settling',
        description: 'Create large, dense flocs for fast sedimentation.'
      },
      {
        title: 'Improved Clarity',
        description: 'Achieve superior final water quality for discharge or reuse.'
      },
      {
        title: 'Reduced Sludge Volume',
        description: 'Produce denser, more manageable solids for disposal.'
      },
      {
        title: 'Optimized Selection',
        description: 'Multiple polymer types to match specific water chemistry.'
      }
    ],
    relatedProducts: ['coagulants', 'water-clarifiers', 'polymers']
  },
  {
    slug: 'glycols-commodity',
    title: 'Glycols',
    icon: 'TestTubeIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Ethylene glycol (MEG), diethylene glycol (DEG), and triethylene glycol (TEG) for gas dehydration and hydrate inhibition.',
    heroDescription:
      'High-purity glycols for gas processing and production operations.',
    features: [
      'Monoethylene glycol (MEG)',
      'Diethylene glycol (DEG)',
      'Triethylene glycol (TEG)',
      'Technical and USP grades',
      'Inhibited formulations',
      'Regenerable systems'
    ],
    applications: [
      'Gas dehydration',
      'Hydrate inhibition',
      'Heat transfer fluids',
      'Antifreeze formulations',
      'Solvent applications',
      'Chemical intermediates'
    ],
    benefits: [
      {
        title: 'Effective Dehydration',
        description: 'Remove water vapor from natural gas to meet pipeline specifications.'
      },
      {
        title: 'Hydrate Prevention',
        description: 'Thermodynamic inhibition of gas hydrate formation.'
      },
      {
        title: 'Regenerable Systems',
        description: 'Recover and reuse glycol to minimize operating costs.'
      },
      {
        title: 'Versatile Chemistry',
        description: 'Multiple glycol types for optimized application performance.'
      }
    ],
    relatedProducts: ['alcohols', 'methanol', 'hydrate-inhibitors']
  },
  {
    slug: 'hypochlorite',
    title: 'Hypochlorite',
    icon: 'SparklesIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium and calcium hypochlorite for oxidizing biocide and disinfection applications.',
    heroDescription:
      'Strong oxidizing agents for microbial control and water treatment.',
    features: [
      'Sodium hypochlorite (bleach)',
      'Calcium hypochlorite',
      '5-15% available chlorine',
      'Liquid and solid forms',
      'On-site generation options',
      'Industrial grade quality'
    ],
    applications: [
      'Water disinfection',
      'Oxidizing biocide',
      'H2S oxidation',
      'Surface cleaning',
      'Biofilm removal',
      'Emergency spill treatment'
    ],
    benefits: [
      {
        title: 'Broad-Spectrum Biocide',
        description: 'Effective against bacteria, algae, and biofilm.'
      },
      {
        title: 'Fast-Acting',
        description: 'Rapid microbial kill and oxidation kinetics.'
      },
      {
        title: 'Cost-Effective',
        description: 'Economical treatment for many water applications.'
      },
      {
        title: 'Multiple Forms',
        description: 'Liquid, solid, and on-site generation options.'
      }
    ],
    relatedProducts: ['biocides', 'peroxides', 'chlorides']
  },
  {
    slug: 'nitrates',
    title: 'Nitrates',
    icon: 'FlameIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Calcium and sodium nitrates for specialized completion fluids and chemical applications.',
    heroDescription:
      'High-purity nitrate salts for completion operations and specialty treatments.',
    features: [
      'Calcium nitrate',
      'Sodium nitrate',
      'Technical grade purity',
      'Liquid and solid forms',
      'Compatible with bromide brines',
      'High-density capability'
    ],
    applications: [
      'Completion fluid density',
      'Clear brine blending',
      'Corrosion inhibitor',
      'Souring prevention',
      'Specialty applications',
      'Packer fluids'
    ],
    benefits: [
      {
        title: 'Density Enhancement',
        description: 'Increase brine density in clear fluid systems.'
      },
      {
        title: 'Souring Control',
        description: 'Nitrate acts as alternative electron acceptor to prevent SRB activity.'
      },
      {
        title: 'Corrosion Mitigation',
        description: 'Nitrate can passivate steel surfaces in certain applications.'
      },
      {
        title: 'Brine Compatibility',
        description: 'Blends well with chloride and bromide systems.'
      }
    ],
    relatedProducts: ['bromides', 'chlorides', 'formates']
  },
  {
    slug: 'phosphates',
    title: 'Phosphates',
    icon: 'TriangleIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium phosphates, polyphosphates, and phosphonates for scale inhibition and water treatment.',
    heroDescription:
      'Industrial phosphate chemicals for scale control and specialty applications.',
    features: [
      'Trisodium phosphate (TSP)',
      'Sodium tripolyphosphate (STPP)',
      'Phosphonate esters',
      'Sequestering agents',
      'Technical grade',
      'Liquid and powder forms'
    ],
    applications: [
      'Scale inhibitor component',
      'Sequestering agent',
      'Cleaning formulations',
      'Corrosion control',
      'Water treatment',
      'Drilling fluid additives'
    ],
    benefits: [
      {
        title: 'Effective Scale Control',
        description: 'Key ingredient in phosphonate-based scale inhibitors.'
      },
      {
        title: 'Metal Sequestration',
        description: 'Bind and disperse troublesome metal ions.'
      },
      {
        title: 'Cleaning Performance',
        description: 'Enhance detergency and surface cleaning.'
      },
      {
        title: 'pH Buffering',
        description: 'Maintain stable pH in treatment solutions.'
      }
    ],
    relatedProducts: ['scale-inhibitors', 'citrates', 'chelants']
  },
  {
    slug: 'solvents',
    title: 'Solvents',
    icon: 'EraserIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Aromatic and aliphatic hydrocarbons, glycol ethers, and specialty solvents for production chemicals.',
    heroDescription:
      'Technical-grade solvents for chemical formulation and well treatment.',
    features: [
      'Aromatic solvents (toluene, xylene)',
      'Aliphatic hydrocarbons',
      'Glycol ethers',
      'Ester solvents',
      'Heavy aromatics',
      'Blended formulations'
    ],
    applications: [
      'Chemical formulation',
      'Mutual solvents for acidizing',
      'Paraffin/asphaltene solvents',
      'Cleaning applications',
      'Carrier fluids',
      'Wellbore cleanup'
    ],
    benefits: [
      {
        title: 'Formulation Flexibility',
        description: 'Essential carriers and diluents for production chemicals.'
      },
      {
        title: 'Deposit Removal',
        description: 'Dissolve organic deposits and contaminants.'
      },
      {
        title: 'Mutual Solvent',
        description: 'Improve acid/oil/water miscibility in treatments.'
      },
      {
        title: 'Diverse Portfolio',
        description: 'Multiple solvent types to match application requirements.'
      }
    ],
    relatedProducts: ['alcohols', 'glycols', 'surfactants']
  },
  {
    slug: 'sulphates',
    title: 'Sulphates',
    icon: 'HexagonIcon',
    category: 'commodity-chemicals',
    shortDescription:
      'Sodium, magnesium, and aluminum sulfates for water treatment, flocculation, and specialty applications.',
    heroDescription:
      'Industrial sulfate salts for clarification and chemical treatment.',
    features: [
      'Sodium sulfate (anhydrous)',
      'Magnesium sulfate (Epsom salt)',
      'Aluminum sulfate (alum)',
      'Ferrous sulfate',
      'Technical and USP grades',
      'Bulk and bagged supply'
    ],
    applications: [
      'Water treatment (coagulation)',
      'Completion fluid weighting',
      'pH adjustment',
      'Chemical synthesis',
      'Specialty applications',
      'Drilling fluid additives'
    ],
    benefits: [
      {
        title: 'Effective Coagulation',
        description: 'Aluminum sulfate is key coagulant for water clarification.'
      },
      {
        title: 'Density Control',
        description: 'Sodium sulfate can weight completion fluids economically.'
      },
      {
        title: 'Chemical Versatility',
        description: 'Multiple sulfate salts for diverse applications.'
      },
      {
        title: 'Cost-Effective',
        description: 'Economical solutions for treatment operations.'
      }
    ],
    relatedProducts: ['coagulants', 'chlorides', 'carbonates']
  }
];

// Export category groupings for easy filtering
export const productCategories = {
  production: productsData.filter((p) => p.category === 'production-chemicals'),
  drilling: productsData.filter((p) => p.category === 'drilling-chemicals'),
  commodity: productsData.filter((p) => p.category === 'commodity-chemicals')
};

// Export slugs for routing
export const productSlugs = productsData.map((p) => p.slug);