export const SEQUENTIAL_BLUE = [
    {"hex": "#f7f7f7", "rgb": [247, 247, 247]},
    {"hex": "#e0eef6", "rgb": [224, 238, 246]},
    {"hex": "#c2d8f1", "rgb": [194, 216, 241]},
    {"hex": "#92c5de", "rgb": [146, 197, 222]},
    {"hex": "#5da6c9", "rgb": [93, 166, 201]},
    {"hex": "#4393c3", "rgb": [67, 147, 195]},
    {"hex": "#2b75a1", "rgb": [43, 117, 161]},
    {"hex": "#2166ac", "rgb": [33, 102, 172]},
    {"hex": "#053061", "rgb": [5, 48, 97]}
  ]

  export const SEQUENTIAL_RED =  [
    {"hex": "#fff5e1", "rgb": [255, 245, 225]},
    {"hex": "#fddbc7", "rgb": [253, 219, 199]},
    {"hex": "#f9d2c3", "rgb": [249, 210, 195]},
    {"hex": "#f6bfa1", "rgb": [246, 191, 161]},
    {"hex": "#f4a582", "rgb": [244, 165, 130]},
    {"hex": "#d6604d", "rgb": [214, 96, 77]},
    {"hex": "#b2182b", "rgb": [178, 24, 43]},
    {"hex": "#9e133d", "rgb": [158, 19, 61]},
    {"hex": "#67001f", "rgb": [103, 0, 31]}
  ]

// translation from german names to rgb values are done by chatGPT  
export const COLOR_LOOKUP_TABLE = {
    "schwarz": [0, 0, 0],  // Black
    "braun": [139, 69, 19], // Brown - a deeper, reddish brown
    "hellbraun": [181, 101, 29], // Light brown - slightly more muted
    "weiss": [255, 253, 208], // White - creamy white
    "beige": [245, 245, 220], // Beige
    "creme": [255, 253, 208], // Creme - off white (same as weiss)
    "gelb": [204, 153, 51], // Yellow - golden yellow
    "tricolor": [255, 255, 255], // Tri-color pattern
    "mahagoni": [192, 64, 0], // Mahogany - slightly more subdued red
    "blau": [70, 130, 180], // Blue - slate blue (muted blue)
    "apricot": [251, 206, 177], // Apricot
    "orange": [255, 165, 0], // Orange - slightly muted
    "rot": [139, 69, 19], // Red - reddish brown
    "black": [0, 0, 0], // Black
    "tan": [210, 180, 140], // Tan
    "marronschimmel": [144, 115, 51], // Chestnut roan
    "dunkelbraun": [101, 67, 33], // Dark brown
    "blondfarben": [255, 220, 185], // Blond
    "gestromt": [115, 92, 60], // Brindle
    "graubraun": [169, 151, 124], // Gray-brown
    "saufarben": [95, 80, 60], // Boar color (dark brownish-gray)
    "blue": [70, 130, 180], // Blue (muted grayish blue)
    "bianco-aranico": [255, 223, 128], // Orange-white
    "choco": [123, 63, 45], // Chocolate
    "hirschrot mit Maske": [128, 0, 0], // Deer red with mask
    "grau": [128, 128, 128], // Gray
    "braun schimmel": [153, 101, 21], // Brown roan
    "goldbraun": [204, 153, 102], // Golden brown
    "red grizzle": [128, 0, 0], // Red grizzle
    "rehbraun": [160, 82, 45], // Roe deer brown
    "braun gestromt": [139, 69, 19], // Brown brindle
    "hirschrot": [153, 51, 51], // Deer red
    "red-wheaten": [214, 96, 77], // Red-wheaten
    "brindle": [115, 92, 60], // Brindle
    "golden": [255, 223, 0], // Golden
    "merle": [128, 128, 128], // Merle
    "sable": [139, 69, 19], // Sable
    "steelblue": [70, 130, 180], // Steel blue
    "blauschimmel": [99, 128, 139], // Blue roan
    "silber": [192, 192, 192], // Silver
    "fauve": [153, 101, 21], // Fawn
    "schoko": [123, 63, 45], // Chocolate
    "zimt": [210, 105, 30], // Cinnamon
    "harlekin": [255, 255, 255], // Harlequin (spotted pattern)
    "weizen": [245, 222, 179], // Wheat
    "steel": [70, 130, 180], // Steel (steelblue)
    "falb": [139, 101, 8], // Fallow
    "rotbraun": [139, 69, 19], // Red-brown
    "grau meliert": [169, 169, 169], // Gray mottled
    "braun meliert": [139, 69, 19], // Brown mottled
    "blue merle": [0, 0, 255], // Blue merle
    "pfeffer": [169, 169, 169], // Pepper
    "salz": [255, 255, 255], // Salt (white)
    "sandfarbig": [194, 178, 128], // Sand-colored
    "zobel": [139, 69, 19], // Sable
    "sand": [194, 178, 128], // Sand
    "braun schwarz gestromt": [139, 69, 19], // Brown-black brindle
    "dunkel gestromt": [70, 50, 40], // Dark brindle
    "vierfarbig": [255, 255, 255], // Four-colored (pattern)
    "ruby": [155, 17, 30], // Ruby
    "Harlekin": [255, 255, 255], // Harlequin
    "schwarz Marken": [0, 0, 0], // Black markings
    "wildfarbig": [150, 105, 60], // Wild-colored
    "gemischt": [139, 69, 19], // Mixed
    "hell-": [255, 255, 255], // Light (base color)
    "schwarz lohfarbig": [0, 0, 0], // Black with tan markings
    "grizzle": [128, 0, 0], // Grizzle
    "fawn": [227, 197, 133], // Fawn
    "dreifarbig": [255, 255, 255], // Three-colored (pattern)
    "gold": [255, 215, 0], // Gold
    "schwarz gestromt": [0, 0, 0], // Black brindle
    "silbergrau": [192, 192, 192], // Silver-gray
    "red merle": [255, 0, 0], // Red merle
    "zobel beige": [194, 178, 128], // Sable beige
    "weiss gestromt": [255, 255, 255], // White brindle
    "white": [255, 255, 255], // White
    "hellfarben": [255, 255, 255], // Light-colored
    "mehrfarbig": [255, 255, 255], // Multi-colored (pattern)
    "haarlos": [255, 255, 255], // Hairless
    "loh": [139, 69, 19], // Tan
    "blond": [255, 220, 185], // Blond
    "blenheim": [255, 255, 255], // Blenheim
    "wheaton": [227, 197, 133], // Wheaton
    "beige gestromt": [245, 245, 220], // Beige brindle
    "blue-brindle": [0, 0, 255], // Blue-brindle
    "schwarz melliert": [0, 0, 0], // Black mottled
    "bicolor": [255, 255, 255], // Bicolor (pattern)
    "rotblond": [255, 99, 71], // Red-blond
    "trindle": [255, 255, 255], // Trindle (pattern)
    "Fox": [255, 87, 34], // Fox red
    "Red": [255, 0, 0], // Red
    "orange Schimmel": [255, 153, 51], // Orange roan
    "lilac": [200, 162, 200], // Lilac
    "red": [255, 0, 0], // Red
    "foxred": [224, 72, 32], // Fox red
    "rotbraun schimmel": [139, 69, 19], // Red-brown roan
    "schoko pied": [123, 63, 45] // Chocolate pied
  }  