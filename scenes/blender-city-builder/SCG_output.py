#Temporary SCG output, you can delete safely :)
from suicidator_city_generator_0_5_4_Free import *

def SCG_build_terrain():
	set_mode('OBJECT')
	pickleData = pickle.load(open(r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_terrain','rb'))
	terrainVerts = pickleData['verts']
	terrainFaces = pickleData['faces']
	terrainMesh = getOrCreateMesh(name='SCG_terrain')
	terrainObject = getOrCreateObject('SCG_terrain', terrainMesh)
	terrainMesh = clearMeshOfObject('SCG_terrain')
	terrainMesh.from_pydata(terrainVerts, [], terrainFaces)
	terrainMesh.update()
	add_material_to_mesh(getOrCreateMaterial('SCG_ter'), terrainMesh)
	waterMesh = getOrCreateMesh(name='SCG_water')
	waterObject = getOrCreateObject('SCG_water', waterMesh)
	waterMesh = clearMeshOfObject('SCG_water')
	waterMesh.from_pydata([(0,0,198.0),(500,0,198.0),(500,500,198.0),(0,500,198.0)], [], [(0,1,2,3)])
	waterMesh.update()
	add_material_to_mesh(getOrCreateMaterial('SCG_lake_or_sea'), waterMesh)
SCG_build_terrain()
def SCG_create_materials_1984028589():
	img_Blue_Water = getOrLoadImage(name='Blue_Water',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Blue_Water.png', reload=True)
	img_Blue_Water.use_premultiply = True
	tex_Blue_Water = getOrCreateTexture('Blue_Water','IMAGE')
	tex_Blue_Water.type = 'IMAGE'
	tex_Blue_Water.image = img_Blue_Water
	img_Blue_Water_mirr = getOrLoadImage(name='Blue_Water_mirr',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Blue_Water_mirr.png', reload=True)
	img_Blue_Water_mirr.use_premultiply = True
	tex_Blue_Water_mirr = getOrCreateTexture('Blue_Water_mirr','IMAGE')
	tex_Blue_Water_mirr.type = 'IMAGE'
	tex_Blue_Water_mirr.image = img_Blue_Water_mirr
	img_Chamomile_Meadow = getOrLoadImage(name='Chamomile_Meadow',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Chamomile_Meadow.png', reload=True)
	img_Chamomile_Meadow.use_premultiply = True
	tex_Chamomile_Meadow = getOrCreateTexture('Chamomile_Meadow','IMAGE')
	tex_Chamomile_Meadow.type = 'IMAGE'
	tex_Chamomile_Meadow.image = img_Chamomile_Meadow
	img_Concrete_Triangles = getOrLoadImage(name='Concrete_Triangles',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Concrete_Triangles.png', reload=True)
	img_Concrete_Triangles.use_premultiply = True
	tex_Concrete_Triangles = getOrCreateTexture('Concrete_Triangles','IMAGE')
	tex_Concrete_Triangles.type = 'IMAGE'
	tex_Concrete_Triangles.image = img_Concrete_Triangles
	img_Concrete_Triangles_Height_Map = getOrLoadImage(name='Concrete_Triangles_Height_Map',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Concrete_Triangles_Height_Map.png', reload=True)
	img_Concrete_Triangles_Height_Map.use_premultiply = True
	tex_Concrete_Triangles_Height_Map = getOrCreateTexture('Concrete_Triangles_Height_Map','IMAGE')
	tex_Concrete_Triangles_Height_Map.type = 'IMAGE'
	tex_Concrete_Triangles_Height_Map.image = img_Concrete_Triangles_Height_Map
	img_Deep_Cave = getOrLoadImage(name='Deep_Cave',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Deep_Cave.png', reload=True)
	img_Deep_Cave.use_premultiply = True
	tex_Deep_Cave = getOrCreateTexture('Deep_Cave','IMAGE')
	tex_Deep_Cave.type = 'IMAGE'
	tex_Deep_Cave.image = img_Deep_Cave
	img_Forest_Floor = getOrLoadImage(name='Forest_Floor',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Forest_Floor.png', reload=True)
	img_Forest_Floor.use_premultiply = True
	tex_Forest_Floor = getOrCreateTexture('Forest_Floor','IMAGE')
	tex_Forest_Floor.type = 'IMAGE'
	tex_Forest_Floor.image = img_Forest_Floor
	img_Inundation = getOrLoadImage(name='Inundation',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Inundation.png', reload=True)
	img_Inundation.use_premultiply = True
	tex_Inundation = getOrCreateTexture('Inundation','IMAGE')
	tex_Inundation.type = 'IMAGE'
	tex_Inundation.image = img_Inundation
	img_Needlepoint_Steel = getOrLoadImage(name='Needlepoint_Steel',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Needlepoint_Steel.png', reload=True)
	img_Needlepoint_Steel.use_premultiply = True
	tex_Needlepoint_Steel = getOrCreateTexture('Needlepoint_Steel','IMAGE')
	tex_Needlepoint_Steel.type = 'IMAGE'
	tex_Needlepoint_Steel.image = img_Needlepoint_Steel
	img_Needlepoint_Steel_Height_Map = getOrLoadImage(name='Needlepoint_Steel_Height_Map',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Needlepoint_Steel_Height_Map.png', reload=True)
	img_Needlepoint_Steel_Height_Map.use_premultiply = True
	tex_Needlepoint_Steel_Height_Map = getOrCreateTexture('Needlepoint_Steel_Height_Map','IMAGE')
	tex_Needlepoint_Steel_Height_Map.type = 'IMAGE'
	tex_Needlepoint_Steel_Height_Map.image = img_Needlepoint_Steel_Height_Map
	img_SCG_build0_bars = getOrLoadImage(name='SCG_build0_bars',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_bars.png', reload=True)
	img_SCG_build0_bars.use_premultiply = True
	tex_SCG_build0_bars = getOrCreateTexture('SCG_build0_bars','IMAGE')
	tex_SCG_build0_bars.type = 'IMAGE'
	tex_SCG_build0_bars.image = img_SCG_build0_bars
	img_SCG_build0_win_col = getOrLoadImage(name='SCG_build0_win_col',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_win_col.png', reload=True)
	img_SCG_build0_win_col.use_premultiply = True
	tex_SCG_build0_win_col = getOrCreateTexture('SCG_build0_win_col','IMAGE')
	tex_SCG_build0_win_col.type = 'IMAGE'
	tex_SCG_build0_win_col.image = img_SCG_build0_win_col
	img_SCG_build0_win_emit = getOrLoadImage(name='SCG_build0_win_emit',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_win_emit.png', reload=True)
	img_SCG_build0_win_emit.use_premultiply = True
	tex_SCG_build0_win_emit = getOrCreateTexture('SCG_build0_win_emit','IMAGE')
	tex_SCG_build0_win_emit.type = 'IMAGE'
	tex_SCG_build0_win_emit.image = img_SCG_build0_win_emit
	img_SCG_build0_win_mask = getOrLoadImage(name='SCG_build0_win_mask',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_win_mask.png', reload=True)
	img_SCG_build0_win_mask.use_premultiply = True
	tex_SCG_build0_win_mask = getOrCreateTexture('SCG_build0_win_mask','IMAGE')
	tex_SCG_build0_win_mask.type = 'IMAGE'
	tex_SCG_build0_win_mask.image = img_SCG_build0_win_mask
	img_SCG_build0_win_mir = getOrLoadImage(name='SCG_build0_win_mir',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_win_mir.png', reload=True)
	img_SCG_build0_win_mir.use_premultiply = True
	tex_SCG_build0_win_mir = getOrCreateTexture('SCG_build0_win_mir','IMAGE')
	tex_SCG_build0_win_mir.type = 'IMAGE'
	tex_SCG_build0_win_mir.image = img_SCG_build0_win_mir
	img_SCG_build0_win_spec = getOrLoadImage(name='SCG_build0_win_spec',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build0_win_spec.png', reload=True)
	img_SCG_build0_win_spec.use_premultiply = True
	tex_SCG_build0_win_spec = getOrCreateTexture('SCG_build0_win_spec','IMAGE')
	tex_SCG_build0_win_spec.type = 'IMAGE'
	tex_SCG_build0_win_spec.image = img_SCG_build0_win_spec
	img_SCG_build1_bars = getOrLoadImage(name='SCG_build1_bars',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_bars.png', reload=True)
	img_SCG_build1_bars.use_premultiply = True
	tex_SCG_build1_bars = getOrCreateTexture('SCG_build1_bars','IMAGE')
	tex_SCG_build1_bars.type = 'IMAGE'
	tex_SCG_build1_bars.image = img_SCG_build1_bars
	img_SCG_build1_win_col = getOrLoadImage(name='SCG_build1_win_col',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_win_col.png', reload=True)
	img_SCG_build1_win_col.use_premultiply = True
	tex_SCG_build1_win_col = getOrCreateTexture('SCG_build1_win_col','IMAGE')
	tex_SCG_build1_win_col.type = 'IMAGE'
	tex_SCG_build1_win_col.image = img_SCG_build1_win_col
	img_SCG_build1_win_emit = getOrLoadImage(name='SCG_build1_win_emit',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_win_emit.png', reload=True)
	img_SCG_build1_win_emit.use_premultiply = True
	tex_SCG_build1_win_emit = getOrCreateTexture('SCG_build1_win_emit','IMAGE')
	tex_SCG_build1_win_emit.type = 'IMAGE'
	tex_SCG_build1_win_emit.image = img_SCG_build1_win_emit
	img_SCG_build1_win_mask = getOrLoadImage(name='SCG_build1_win_mask',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_win_mask.png', reload=True)
	img_SCG_build1_win_mask.use_premultiply = True
	tex_SCG_build1_win_mask = getOrCreateTexture('SCG_build1_win_mask','IMAGE')
	tex_SCG_build1_win_mask.type = 'IMAGE'
	tex_SCG_build1_win_mask.image = img_SCG_build1_win_mask
	img_SCG_build1_win_mir = getOrLoadImage(name='SCG_build1_win_mir',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_win_mir.png', reload=True)
	img_SCG_build1_win_mir.use_premultiply = True
	tex_SCG_build1_win_mir = getOrCreateTexture('SCG_build1_win_mir','IMAGE')
	tex_SCG_build1_win_mir.type = 'IMAGE'
	tex_SCG_build1_win_mir.image = img_SCG_build1_win_mir
	img_SCG_build1_win_spec = getOrLoadImage(name='SCG_build1_win_spec',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_build1_win_spec.png', reload=True)
	img_SCG_build1_win_spec.use_premultiply = True
	tex_SCG_build1_win_spec = getOrCreateTexture('SCG_build1_win_spec','IMAGE')
	tex_SCG_build1_win_spec.type = 'IMAGE'
	tex_SCG_build1_win_spec.image = img_SCG_build1_win_spec
	img_SCG_stree_ma_asphalt = getOrLoadImage(name='SCG_stree_ma_asphalt',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_stree_ma_asphalt.png', reload=True)
	img_SCG_stree_ma_asphalt.use_premultiply = True
	tex_SCG_stree_ma_asphalt = getOrCreateTexture('SCG_stree_ma_asphalt','IMAGE')
	tex_SCG_stree_ma_asphalt.type = 'IMAGE'
	tex_SCG_stree_ma_asphalt.image = img_SCG_stree_ma_asphalt
	img_SCG_stree_ma_midlines = getOrLoadImage(name='SCG_stree_ma_midlines',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_stree_ma_midlines.png', reload=True)
	img_SCG_stree_ma_midlines.use_premultiply = True
	tex_SCG_stree_ma_midlines = getOrCreateTexture('SCG_stree_ma_midlines','IMAGE')
	tex_SCG_stree_ma_midlines.type = 'IMAGE'
	tex_SCG_stree_ma_midlines.image = img_SCG_stree_ma_midlines
	img_SCG_stree_ma_sidewalk = getOrLoadImage(name='SCG_stree_ma_sidewalk',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_stree_ma_sidewalk.png', reload=True)
	img_SCG_stree_ma_sidewalk.use_premultiply = True
	tex_SCG_stree_ma_sidewalk = getOrCreateTexture('SCG_stree_ma_sidewalk','IMAGE')
	tex_SCG_stree_ma_sidewalk.type = 'IMAGE'
	tex_SCG_stree_ma_sidewalk.image = img_SCG_stree_ma_sidewalk
	img_SCG_ter_ma_height = getOrLoadImage(name='SCG_ter_ma_height',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_ter_ma_height.png', reload=True)
	img_SCG_ter_ma_height.use_premultiply = True
	tex_SCG_ter_ma_height = getOrCreateTexture('SCG_ter_ma_height','IMAGE')
	tex_SCG_ter_ma_height.type = 'IMAGE'
	tex_SCG_ter_ma_height.image = img_SCG_ter_ma_height
	img_SCG_ter_ma_noise = getOrLoadImage(name='SCG_ter_ma_noise',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_ter_ma_noise.png', reload=True)
	img_SCG_ter_ma_noise.use_premultiply = True
	tex_SCG_ter_ma_noise = getOrCreateTexture('SCG_ter_ma_noise','IMAGE')
	tex_SCG_ter_ma_noise.type = 'IMAGE'
	tex_SCG_ter_ma_noise.image = img_SCG_ter_ma_noise
	img_SCG_ter_ma_slope = getOrLoadImage(name='SCG_ter_ma_slope',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_ter_ma_slope.png', reload=True)
	img_SCG_ter_ma_slope.use_premultiply = True
	tex_SCG_ter_ma_slope = getOrCreateTexture('SCG_ter_ma_slope','IMAGE')
	tex_SCG_ter_ma_slope.type = 'IMAGE'
	tex_SCG_ter_ma_slope.image = img_SCG_ter_ma_slope
	img_SCG_ter_ma_underwater = getOrLoadImage(name='SCG_ter_ma_underwater',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_ter_ma_underwater.png', reload=True)
	img_SCG_ter_ma_underwater.use_premultiply = True
	tex_SCG_ter_ma_underwater = getOrCreateTexture('SCG_ter_ma_underwater','IMAGE')
	tex_SCG_ter_ma_underwater.type = 'IMAGE'
	tex_SCG_ter_ma_underwater.image = img_SCG_ter_ma_underwater
	img_Silvery_Blue = getOrLoadImage(name='Silvery_Blue',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Silvery_Blue.png', reload=True)
	img_Silvery_Blue.use_premultiply = True
	tex_Silvery_Blue = getOrCreateTexture('Silvery_Blue','IMAGE')
	tex_Silvery_Blue.type = 'IMAGE'
	tex_Silvery_Blue.image = img_Silvery_Blue
	img_Weathered_Stone_Wall = getOrLoadImage(name='Weathered_Stone_Wall',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Weathered_Stone_Wall.png', reload=True)
	img_Weathered_Stone_Wall.use_premultiply = True
	tex_Weathered_Stone_Wall = getOrCreateTexture('Weathered_Stone_Wall','IMAGE')
	tex_Weathered_Stone_Wall.type = 'IMAGE'
	tex_Weathered_Stone_Wall.image = img_Weathered_Stone_Wall
	img_Worn_Brown_Brickwork = getOrLoadImage(name='Worn_Brown_Brickwork',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Worn_Brown_Brickwork.png', reload=True)
	img_Worn_Brown_Brickwork.use_premultiply = True
	tex_Worn_Brown_Brickwork = getOrCreateTexture('Worn_Brown_Brickwork','IMAGE')
	tex_Worn_Brown_Brickwork.type = 'IMAGE'
	tex_Worn_Brown_Brickwork.image = img_Worn_Brown_Brickwork
	img_Worn_Brown_Brickwork_Height_Map = getOrLoadImage(name='Worn_Brown_Brickwork_Height_Map',url=r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\Worn_Brown_Brickwork_Height_Map.png', reload=True)
	img_Worn_Brown_Brickwork_Height_Map.use_premultiply = True
	tex_Worn_Brown_Brickwork_Height_Map = getOrCreateTexture('Worn_Brown_Brickwork_Height_Map','IMAGE')
	tex_Worn_Brown_Brickwork_Height_Map.type = 'IMAGE'
	tex_Worn_Brown_Brickwork_Height_Map.image = img_Worn_Brown_Brickwork_Height_Map
	mat_SCG_ter = getOrCreateMaterial('SCG_ter')
	mat_SCG_ter.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_ter.specular_color = (1.0,1.0,1.0)
	mat_SCG_ter.specular_intensity = 0.1
	mat_SCG_ter.specular_hardness = 100.0
	mat_SCG_ter.use_transparency = False
	mat_SCG_ter.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_ter)
	tex_slot = mat_SCG_ter.texture_slots.add()
	tex_slot.texture = tex_Forest_Floor
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (50.0,50.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_ter.texture_slots.add()
	tex_slot.texture = tex_SCG_ter_ma_noise
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'SUBTRACT'
	tex_SCG_ter_ma_noise.use_color_ramp = True
	tex_slot.use_map_color_diffuse = True
	mat_SCG_lake_or_sea = getOrCreateMaterial('SCG_lake_or_sea')
	mat_SCG_lake_or_sea.diffuse_color = (0.39215687,0.43529412,0.73333335)
	mat_SCG_lake_or_sea.specular_color = (1.0,1.0,1.0)
	mat_SCG_lake_or_sea.specular_intensity = 0.1
	mat_SCG_lake_or_sea.specular_hardness = 100.0
	mat_SCG_lake_or_sea.use_transparency = False
	mat_SCG_lake_or_sea.raytrace_mirror.use = True
	clear_material_slots(mat_SCG_lake_or_sea)
	tex_slot = mat_SCG_lake_or_sea.texture_slots.add()
	tex_slot.texture = tex_Blue_Water
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (50.0,50.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_lake_or_sea.texture_slots.add()
	tex_slot.texture = tex_Blue_Water_mirr
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (50.0,50.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_rgb_to_intensity = True
	tex_slot.use_map_raymir = True
	mat_SCG_ter_slopes = getOrCreateMaterial('SCG_ter_slopes')
	mat_SCG_ter_slopes.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_ter_slopes.specular_color = (1.0,1.0,1.0)
	mat_SCG_ter_slopes.specular_intensity = 0.1
	mat_SCG_ter_slopes.specular_hardness = 100.0
	mat_SCG_ter_slopes.use_transparency = False
	mat_SCG_ter_slopes.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_ter_slopes)
	tex_slot = mat_SCG_ter_slopes.texture_slots.add()
	tex_slot.texture = tex_Silvery_Blue
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (100.0,100.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	mat_SCG_ter_height = getOrCreateMaterial('SCG_ter_height')
	mat_SCG_ter_height.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_ter_height.specular_color = (1.0,1.0,1.0)
	mat_SCG_ter_height.specular_intensity = 0.1
	mat_SCG_ter_height.specular_hardness = 100.0
	mat_SCG_ter_height.use_transparency = False
	mat_SCG_ter_height.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_ter_height)
	tex_slot = mat_SCG_ter_height.texture_slots.add()
	tex_slot.texture = tex_Chamomile_Meadow
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (100.0,100.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	mat_SCG_ter_underwater = getOrCreateMaterial('SCG_ter_underwater')
	mat_SCG_ter_underwater.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_ter_underwater.specular_color = (1.0,1.0,1.0)
	mat_SCG_ter_underwater.specular_intensity = 0.1
	mat_SCG_ter_underwater.specular_hardness = 100.0
	mat_SCG_ter_underwater.use_transparency = False
	mat_SCG_ter_underwater.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_ter_underwater)
	tex_slot = mat_SCG_ter_underwater.texture_slots.add()
	tex_slot.texture = tex_Inundation
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (100.0,100.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	mat_SCG_streets_sidewalk = getOrCreateMaterial('SCG_streets_sidewalk')
	mat_SCG_streets_sidewalk.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_streets_sidewalk.specular_color = (1.0,1.0,1.0)
	mat_SCG_streets_sidewalk.specular_intensity = 0.1
	mat_SCG_streets_sidewalk.specular_hardness = 100.0
	mat_SCG_streets_sidewalk.use_transparency = False
	mat_SCG_streets_sidewalk.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_streets_sidewalk)
	tex_slot = mat_SCG_streets_sidewalk.texture_slots.add()
	tex_slot.texture = tex_Weathered_Stone_Wall
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (50.0,50.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	mat_SCG_streets_asphalt = getOrCreateMaterial('SCG_streets_asphalt')
	mat_SCG_streets_asphalt.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_streets_asphalt.specular_color = (1.0,1.0,1.0)
	mat_SCG_streets_asphalt.specular_intensity = 0.1
	mat_SCG_streets_asphalt.specular_hardness = 100.0
	mat_SCG_streets_asphalt.use_transparency = False
	mat_SCG_streets_asphalt.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_streets_asphalt)
	tex_slot = mat_SCG_streets_asphalt.texture_slots.add()
	tex_slot.texture = tex_Deep_Cave
	tex_slot.texture_coords = 'ORCO'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (50.0,50.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	mat_SCG_streets_midlines = getOrCreateMaterial('SCG_streets_midlines')
	mat_SCG_streets_midlines.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_streets_midlines.specular_color = (1.0,1.0,1.0)
	mat_SCG_streets_midlines.specular_intensity = 0.1
	mat_SCG_streets_midlines.specular_hardness = 100.0
	mat_SCG_streets_midlines.use_transparency = False
	mat_SCG_streets_midlines.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_streets_midlines)
	mat_SCG_build0_base = getOrCreateMaterial('SCG_build0_base')
	mat_SCG_build0_base.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build0_base.specular_color = (1.0,1.0,1.0)
	mat_SCG_build0_base.specular_intensity = 0.1
	mat_SCG_build0_base.specular_hardness = 100.0
	mat_SCG_build0_base.use_transparency = False
	mat_SCG_build0_base.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build0_base)
	tex_slot = mat_SCG_build0_base.texture_slots.add()
	tex_slot.texture = tex_Needlepoint_Steel
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (41.0,41.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build0_base.texture_slots.add()
	tex_slot.texture = tex_Needlepoint_Steel_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (41.0,41.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_build0_roof_base = getOrCreateMaterial('SCG_build0_roof_base')
	mat_SCG_build0_roof_base.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build0_roof_base.specular_color = (1.0,1.0,1.0)
	mat_SCG_build0_roof_base.specular_intensity = 0.1
	mat_SCG_build0_roof_base.specular_hardness = 100.0
	mat_SCG_build0_roof_base.use_transparency = False
	mat_SCG_build0_roof_base.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build0_roof_base)
	tex_slot = mat_SCG_build0_roof_base.texture_slots.add()
	tex_slot.texture = tex_Needlepoint_Steel
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (41.0,41.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build0_roof_base.texture_slots.add()
	tex_slot.texture = tex_Needlepoint_Steel_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (41.0,41.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_build0_win = getOrCreateMaterial('SCG_build0_win')
	mat_SCG_build0_win.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build0_win.specular_color = (1.0,1.0,1.0)
	mat_SCG_build0_win.specular_intensity = 0.0
	mat_SCG_build0_win.specular_hardness = 100.0
	mat_SCG_build0_win.use_transparency = False
	mat_SCG_build0_win.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build0_win)
	tex_slot = mat_SCG_build0_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build0_win_col
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build0_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build0_win_emit
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_emit = True
	tex_slot = mat_SCG_build0_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build0_win_spec
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_rgb_to_intensity = True
	tex_slot.use_map_specular = True
	mat_SCG_build0_win_mirr = getOrCreateMaterial('SCG_build0_win_mirr')
	mat_SCG_build0_win_mirr.diffuse_color = (0.0,0.0,0.0)
	mat_SCG_build0_win_mirr.specular_color = (1.0,1.0,1.0)
	mat_SCG_build0_win_mirr.specular_intensity = 0.0
	mat_SCG_build0_win_mirr.specular_hardness = 100.0
	mat_SCG_build0_win_mirr.use_transparency = False
	mat_SCG_build0_win_mirr.raytrace_mirror.use = True
	clear_material_slots(mat_SCG_build0_win_mirr)
	tex_slot = mat_SCG_build0_win_mirr.texture_slots.add()
	tex_slot.texture = tex_SCG_build0_win_mask
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_rgb_to_intensity = True
	tex_slot.use_map_raymir = True
	mat_SCG_build0_bars = getOrCreateMaterial('SCG_build0_bars')
	mat_SCG_build0_bars.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build0_bars.specular_color = (1.0,1.0,1.0)
	mat_SCG_build0_bars.specular_intensity = 0.1
	mat_SCG_build0_bars.specular_hardness = 100.0
	mat_SCG_build0_bars.use_transparency = False
	mat_SCG_build0_bars.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build0_bars)
	tex_slot = mat_SCG_build0_bars.texture_slots.add()
	tex_slot.texture = tex_Worn_Brown_Brickwork
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (37.0,37.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build0_bars.texture_slots.add()
	tex_slot.texture = tex_Worn_Brown_Brickwork_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (37.0,37.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_build1_base = getOrCreateMaterial('SCG_build1_base')
	mat_SCG_build1_base.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build1_base.specular_color = (1.0,1.0,1.0)
	mat_SCG_build1_base.specular_intensity = 0.1
	mat_SCG_build1_base.specular_hardness = 100.0
	mat_SCG_build1_base.use_transparency = False
	mat_SCG_build1_base.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build1_base)
	tex_slot = mat_SCG_build1_base.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (39.0,39.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build1_base.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (39.0,39.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_build1_roof_base = getOrCreateMaterial('SCG_build1_roof_base')
	mat_SCG_build1_roof_base.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build1_roof_base.specular_color = (1.0,1.0,1.0)
	mat_SCG_build1_roof_base.specular_intensity = 0.1
	mat_SCG_build1_roof_base.specular_hardness = 100.0
	mat_SCG_build1_roof_base.use_transparency = False
	mat_SCG_build1_roof_base.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build1_roof_base)
	tex_slot = mat_SCG_build1_roof_base.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (39.0,39.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build1_roof_base.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (39.0,39.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_build1_win = getOrCreateMaterial('SCG_build1_win')
	mat_SCG_build1_win.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build1_win.specular_color = (1.0,1.0,1.0)
	mat_SCG_build1_win.specular_intensity = 0.0
	mat_SCG_build1_win.specular_hardness = 100.0
	mat_SCG_build1_win.use_transparency = False
	mat_SCG_build1_win.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build1_win)
	tex_slot = mat_SCG_build1_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build1_win_col
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build1_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build1_win_emit
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_emit = True
	tex_slot = mat_SCG_build1_win.texture_slots.add()
	tex_slot.texture = tex_SCG_build1_win_spec
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_rgb_to_intensity = True
	tex_slot.use_map_specular = True
	mat_SCG_build1_win_mirr = getOrCreateMaterial('SCG_build1_win_mirr')
	mat_SCG_build1_win_mirr.diffuse_color = (0.0,0.0,0.0)
	mat_SCG_build1_win_mirr.specular_color = (1.0,1.0,1.0)
	mat_SCG_build1_win_mirr.specular_intensity = 0.0
	mat_SCG_build1_win_mirr.specular_hardness = 100.0
	mat_SCG_build1_win_mirr.use_transparency = False
	mat_SCG_build1_win_mirr.raytrace_mirror.use = True
	clear_material_slots(mat_SCG_build1_win_mirr)
	tex_slot = mat_SCG_build1_win_mirr.texture_slots.add()
	tex_slot.texture = tex_SCG_build1_win_mask
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (1.0,1.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_rgb_to_intensity = True
	tex_slot.use_map_raymir = True
	mat_SCG_build1_bars = getOrCreateMaterial('SCG_build1_bars')
	mat_SCG_build1_bars.diffuse_color = (0.8,0.8,0.8)
	mat_SCG_build1_bars.specular_color = (1.0,1.0,1.0)
	mat_SCG_build1_bars.specular_intensity = 0.1
	mat_SCG_build1_bars.specular_hardness = 100.0
	mat_SCG_build1_bars.use_transparency = False
	mat_SCG_build1_bars.raytrace_mirror.use = False
	clear_material_slots(mat_SCG_build1_bars)
	tex_slot = mat_SCG_build1_bars.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (46.0,46.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_color_diffuse = True
	tex_slot = mat_SCG_build1_bars.texture_slots.add()
	tex_slot.texture = tex_Concrete_Triangles_Height_Map
	tex_slot.texture_coords = 'UV'
	tex_slot.use_map_color_diffuse = False
	tex_slot.scale = (46.0,46.0,1)
	tex_slot.blend_type = 'MIX'
	tex_slot.use_map_normal = True
	mat_SCG_ter.use_nodes = True
	clear_material_nodes(mat_SCG_ter)
	tree = mat_SCG_ter.node_tree
	links = tree.links
	geom_node = tree.nodes.new(type='GEOMETRY')
	geom_node.location = 0,300
	uv_output_socket = geom_node.outputs['UV']
	orco_output_socket = geom_node.outputs['Orco']
	material_node = tree.nodes.new(type='MATERIAL_EXT')
	material_node.location = 0,0
	material_node.material = mat_SCG_ter
	color_stack_output_socket = material_node.outputs['Color']
	alpha_stack_output_socket = material_node.outputs['Alpha']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 300,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 300,-300
	mat_to_stack_node.material = mat_SCG_ter_slopes
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_ter_ma_slope
	tex_SCG_ter_ma_slope.use_mipmap = False
	tex_SCG_ter_ma_slope.use_interpolation = False
	stencil_texture_node.location = 300,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 600,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 600,-300
	mat_to_stack_node.material = mat_SCG_ter_height
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_ter_ma_height
	tex_SCG_ter_ma_height.use_mipmap = False
	tex_SCG_ter_ma_height.use_interpolation = False
	stencil_texture_node.location = 600,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 900,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 900,-300
	mat_to_stack_node.material = mat_SCG_ter_underwater
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_ter_ma_underwater
	tex_SCG_ter_ma_underwater.use_mipmap = False
	tex_SCG_ter_ma_underwater.use_interpolation = False
	stencil_texture_node.location = 900,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 1200,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 1200,-300
	mat_to_stack_node.material = mat_SCG_streets_sidewalk
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_stree_ma_sidewalk
	tex_SCG_stree_ma_sidewalk.use_mipmap = False
	tex_SCG_stree_ma_sidewalk.use_interpolation = False
	stencil_texture_node.location = 1200,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 1500,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 1500,-300
	mat_to_stack_node.material = mat_SCG_streets_asphalt
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_stree_ma_asphalt
	tex_SCG_stree_ma_asphalt.use_mipmap = False
	tex_SCG_stree_ma_asphalt.use_interpolation = False
	stencil_texture_node.location = 1500,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 1800,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 1800,-300
	mat_to_stack_node.material = mat_SCG_streets_midlines
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_stree_ma_midlines
	tex_SCG_stree_ma_midlines.use_mipmap = False
	tex_SCG_stree_ma_midlines.use_interpolation = False
	stencil_texture_node.location = 1800,300
	links.new(orco_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	output_node = tree.nodes.new(type='OUTPUT')
	output_node.location = 2100,0
	links.new(color_stack_output_socket, output_node.inputs['Color'])
	links.new(alpha_stack_output_socket, output_node.inputs['Alpha'])
	mat_SCG_lake_or_sea.use_nodes = False
	mat_SCG_ter_slopes.use_nodes = False
	mat_SCG_ter_height.use_nodes = False
	mat_SCG_ter_underwater.use_nodes = False
	mat_SCG_streets_sidewalk.use_nodes = False
	mat_SCG_streets_asphalt.use_nodes = False
	mat_SCG_streets_midlines.use_nodes = False
	mat_SCG_build0_base.use_nodes = True
	clear_material_nodes(mat_SCG_build0_base)
	tree = mat_SCG_build0_base.node_tree
	links = tree.links
	geom_node = tree.nodes.new(type='GEOMETRY')
	geom_node.location = 0,300
	uv_output_socket = geom_node.outputs['UV']
	orco_output_socket = geom_node.outputs['Orco']
	material_node = tree.nodes.new(type='MATERIAL_EXT')
	material_node.location = 0,0
	material_node.material = mat_SCG_build0_base
	color_stack_output_socket = material_node.outputs['Color']
	alpha_stack_output_socket = material_node.outputs['Alpha']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 300,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 300,-300
	mat_to_stack_node.material = mat_SCG_build0_win
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build0_win_mask
	tex_SCG_build0_win_mask.use_mipmap = False
	tex_SCG_build0_win_mask.use_interpolation = False
	stencil_texture_node.location = 300,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 600,0
	mix_node.blend_type = 'ADD'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 600,-300
	mat_to_stack_node.material = mat_SCG_build0_win_mirr
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build0_win_mir
	tex_SCG_build0_win_mir.use_mipmap = False
	tex_SCG_build0_win_mir.use_interpolation = False
	stencil_texture_node.location = 600,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 900,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 900,-300
	mat_to_stack_node.material = mat_SCG_build0_bars
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build0_bars
	tex_SCG_build0_bars.use_mipmap = False
	tex_SCG_build0_bars.use_interpolation = False
	stencil_texture_node.location = 900,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	output_node = tree.nodes.new(type='OUTPUT')
	output_node.location = 1200,0
	links.new(color_stack_output_socket, output_node.inputs['Color'])
	links.new(alpha_stack_output_socket, output_node.inputs['Alpha'])
	mat_SCG_build0_roof_base.use_nodes = True
	clear_material_nodes(mat_SCG_build0_roof_base)
	tree = mat_SCG_build0_roof_base.node_tree
	links = tree.links
	geom_node = tree.nodes.new(type='GEOMETRY')
	geom_node.location = 0,300
	uv_output_socket = geom_node.outputs['UV']
	orco_output_socket = geom_node.outputs['Orco']
	material_node = tree.nodes.new(type='MATERIAL_EXT')
	material_node.location = 0,0
	material_node.material = mat_SCG_build0_roof_base
	color_stack_output_socket = material_node.outputs['Color']
	alpha_stack_output_socket = material_node.outputs['Alpha']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 300,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 300,-300
	mat_to_stack_node.material = mat_SCG_build0_bars
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build0_bars
	tex_SCG_build0_bars.use_mipmap = False
	tex_SCG_build0_bars.use_interpolation = False
	stencil_texture_node.location = 300,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	output_node = tree.nodes.new(type='OUTPUT')
	output_node.location = 600,0
	links.new(color_stack_output_socket, output_node.inputs['Color'])
	links.new(alpha_stack_output_socket, output_node.inputs['Alpha'])
	mat_SCG_build0_win.use_nodes = False
	mat_SCG_build0_win_mirr.use_nodes = False
	mat_SCG_build0_bars.use_nodes = False
	mat_SCG_build1_base.use_nodes = True
	clear_material_nodes(mat_SCG_build1_base)
	tree = mat_SCG_build1_base.node_tree
	links = tree.links
	geom_node = tree.nodes.new(type='GEOMETRY')
	geom_node.location = 0,300
	uv_output_socket = geom_node.outputs['UV']
	orco_output_socket = geom_node.outputs['Orco']
	material_node = tree.nodes.new(type='MATERIAL_EXT')
	material_node.location = 0,0
	material_node.material = mat_SCG_build1_base
	color_stack_output_socket = material_node.outputs['Color']
	alpha_stack_output_socket = material_node.outputs['Alpha']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 300,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 300,-300
	mat_to_stack_node.material = mat_SCG_build1_win
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build1_win_mask
	tex_SCG_build1_win_mask.use_mipmap = False
	tex_SCG_build1_win_mask.use_interpolation = False
	stencil_texture_node.location = 300,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 600,0
	mix_node.blend_type = 'ADD'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 600,-300
	mat_to_stack_node.material = mat_SCG_build1_win_mirr
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build1_win_mir
	tex_SCG_build1_win_mir.use_mipmap = False
	tex_SCG_build1_win_mir.use_interpolation = False
	stencil_texture_node.location = 600,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 900,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 900,-300
	mat_to_stack_node.material = mat_SCG_build1_bars
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build1_bars
	tex_SCG_build1_bars.use_mipmap = False
	tex_SCG_build1_bars.use_interpolation = False
	stencil_texture_node.location = 900,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	output_node = tree.nodes.new(type='OUTPUT')
	output_node.location = 1200,0
	links.new(color_stack_output_socket, output_node.inputs['Color'])
	links.new(alpha_stack_output_socket, output_node.inputs['Alpha'])
	mat_SCG_build1_roof_base.use_nodes = True
	clear_material_nodes(mat_SCG_build1_roof_base)
	tree = mat_SCG_build1_roof_base.node_tree
	links = tree.links
	geom_node = tree.nodes.new(type='GEOMETRY')
	geom_node.location = 0,300
	uv_output_socket = geom_node.outputs['UV']
	orco_output_socket = geom_node.outputs['Orco']
	material_node = tree.nodes.new(type='MATERIAL_EXT')
	material_node.location = 0,0
	material_node.material = mat_SCG_build1_roof_base
	color_stack_output_socket = material_node.outputs['Color']
	alpha_stack_output_socket = material_node.outputs['Alpha']
	mix_node = tree.nodes.new(type='MIX_RGB')
	mix_node.location = 300,0
	mix_node.blend_type = 'MIX'
	mat_to_stack_node = tree.nodes.new(type='MATERIAL')
	mat_to_stack_node.location = 300,-300
	mat_to_stack_node.material = mat_SCG_build1_bars
	links.new(color_stack_output_socket, mix_node.inputs['Color1'])
	links.new(mat_to_stack_node.outputs['Color'], mix_node.inputs['Color2'])
	stencil_texture_node = tree.nodes.new(type='TEXTURE')
	stencil_texture_node.texture = tex_SCG_build1_bars
	tex_SCG_build1_bars.use_mipmap = False
	tex_SCG_build1_bars.use_interpolation = False
	stencil_texture_node.location = 300,300
	links.new(uv_output_socket, stencil_texture_node.inputs['Vector'])
	links.new(stencil_texture_node.outputs['Color'], mix_node.inputs['Fac'])
	color_stack_output_socket = mix_node.outputs['Color']
	output_node = tree.nodes.new(type='OUTPUT')
	output_node.location = 600,0
	links.new(color_stack_output_socket, output_node.inputs['Color'])
	links.new(alpha_stack_output_socket, output_node.inputs['Alpha'])
	mat_SCG_build1_win.use_nodes = False
	mat_SCG_build1_win_mirr.use_nodes = False
	mat_SCG_build1_bars.use_nodes = False
SCG_create_materials_1984028589()

def build_mesh_SCG_city():
	set_mode('OBJECT')
	bpy.context.scene.layers[5] = True
	bpy.context.scene.layers[15] = True
	mainMesh = getOrCreateMesh(name='SCG_city')
	mainObject = getOrCreateObject('SCG_city', mainMesh)
	mainMesh = clearMeshOfObject('SCG_city')
	mainObject.parent = None
	mainObject.hide = mainObject.hide_render = False
	mainObject.layers = (False,False,False,False,False,True,False,False,False,False,False,False,False,False,False,False,False,False,False,False)
	mainObject.rotation_euler = (0,0,0)
	startTime = time.time()
	pickleData = pickle.load(open(r'C:\Users\Theo\AppData\Local\Temp\BlenderPortableTemp\\SCG_mesh_SCG_city','rb'))
	mainMeshVerts = []
	mainMeshFaces = []
	mainMeshVerts = pickleData['verts']
	mainMeshFaces = pickleData['faces']
	mainMesh.from_pydata(mainMeshVerts, [], mainMeshFaces)
	mainMesh.update()
	uvLayer = get_or_create_uv_layer('SCG_main', mainMesh)
	unwrap_mesh_from_data(mainMesh, uvLayer, None, pickleData['facesUV'])
	matIndicesByMatName = {}
	SCG_build1_roof_baseIndex = add_material_to_mesh(getOrCreateMaterial('SCG_build1_roof_base'), mainMesh)
	matIndicesByMatName['SCG_build1_roof_base'] = SCG_build1_roof_baseIndex
	SCG_build0_baseIndex = add_material_to_mesh(getOrCreateMaterial('SCG_build0_base'), mainMesh)
	matIndicesByMatName['SCG_build0_base'] = SCG_build0_baseIndex
	SCG_build1_baseIndex = add_material_to_mesh(getOrCreateMaterial('SCG_build1_base'), mainMesh)
	matIndicesByMatName['SCG_build1_base'] = SCG_build1_baseIndex
	SCG_build0_roof_baseIndex = add_material_to_mesh(getOrCreateMaterial('SCG_build0_roof_base'), mainMesh)
	matIndicesByMatName['SCG_build0_roof_base'] = SCG_build0_roof_baseIndex
	set_faces_material_index(mainMesh, pickleData['facesMaterial'], matIndicesByMatName)
build_mesh_SCG_city()
