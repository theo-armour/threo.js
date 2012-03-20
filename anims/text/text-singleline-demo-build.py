
import bpy
import math
from math import pi

def removeObjects( scn ):
    for ob in scn.objects:
        if ob.type == 'FONT' or ob.type == 'MESH':
            scn.objects.unlink( ob )	
        elif ob.type == 'CAMERA':	
            ob.location = (1, -8, 1)
            #ob.rotation = (0, 0, 0)			
 
scn = bpy.context.scene
removeObjects( scn )

fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\Impact.ttf')

def  makeMaterial(name,  diffuse,  specular,  alpha):
    mat  =  bpy.data.materials.new(name)
    mat.diffuse_color  =  diffuse
    mat.diffuse_shader = 'LAMBERT'
    mat.diffuse_intensity  =  1.0
    mat.specular_color  =  specular
    mat.specular_shader  = 'COOKTORR'
    mat.specular_intensity  =  0.5
    mat.alpha  =  alpha
    mat.ambient  =  1
    return  mat

def  setMaterial(ob,  mat):
    me  =  ob.data
    me.materials.append(mat)
    
red  =  makeMaterial('Red', (1, 0, 0),  (1, 1, 1),  1)
blue  =  makeMaterial('BlueSemi', (0, 0, 1), (1, 1, 1), 0.5)
green  =  makeMaterial('GreenSemi', (0, 1, 0), (1, 1, 1), 0.5)
yellow  =  makeMaterial('YellowSemi', (1, 1, 0), (1, 1, 1), 0.5)

"""
# Create and name TextCurve object #1
bpy.ops.object.text_add(
location=(-3, 0, 3.6),
rotation=(pi/2, 0, 0))
ob = bpy.context.object
ob.name = 'Text1'
# TextCurve attributes
ob.data.name = 'TextData1'
ob.data.body = "THREE.JS"
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\Impact.ttf')
ob.data.font = fnt
ob.data.size = 2.75
# Inherited Curve attributes
ob.data.bevel_depth = 0.1
ob.data.bevel_resolution = 5
ob.data.extrude = 0.5
setMaterial(ob, red)
bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve object #2
bpy.ops.object.text_add(
location=(-3, 0, 1.6),
rotation=(pi/2, 0, 0))
ob = bpy.context.object
ob.name = 'Text2'
# TextCurve attributes
ob.data.name = 'TextData2'
ob.data.body = "TEXT"
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\Georgia.ttf')
ob.data.font = fnt
ob.data.bevel_depth = 0.1
ob.data.bevel_resolution = 5
ob.data.size = 3
# Inherited Curve attributes
ob.data.extrude = 0.5
setMaterial(ob, green)
bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve object #3
bpy.ops.object.text_add(
location=(-3, 0, 0),
rotation=(1.51, 0, 0))
ob = bpy.context.object
ob.name = 'Text3'
# TextCurve attributes
ob.data.body = "DEMO"
ob.data.name = 'TextData3'
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\coopbl.ttf')
ob.data.font = fnt
ob.data.bevel_depth = 0.1
ob.data.bevel_resolution = 5
ob.data.size = 2.32
# Inherited Curve attributes
ob.data.extrude = 0.5
setMaterial(ob, yellow)
bpy.ops.object.convert(target='MESH', keep_original=False)
"""


# Create and name TextCurve thing#1
bpy.ops.object.text_add(
location=(0, 0, 0),
rotation=(pi/2, 0, 0))
ob = bpy.context.object
ob.name = 'object1'
# TextCurve attributes
#ob.data.body = 'The Quick Brown Fox Jumps Over A Lazy Dog'
ob.data.body = 'Pack my box with five dozen liquor jugs'
#ob.data.body = 'Sphinx of black quartz, judge my vow.'
#ob.data.body = 'Big fjords vex quick waltz nymph'
#ob.data.body = 'Glib jocks quiz nymph to vex dwarf'
ob.data.name = 'objectData1'
#fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\harlowsi.ttf')
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\snap____.ttf')
#fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\mistral.ttf')
#fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\chiller.ttf')
#fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\oldengl.ttf')
ob.data.font = fnt
ob.data.size = 1
# Inherited Curve attributes
ob.data.extrude = 0.25
setMaterial(ob, blue)
bpy.ops.object.convert(target='MESH', keep_original=False)

"""
# Create and name TextCurve thing#2
bpy.ops.object.text_add(
location=(-5, 0, 2),
rotation=(pi/2, 0.3, 0.6))
ob = bpy.context.object
ob.name = 'object2'
# TextCurve attributes
ob.data.body = '1234567'
ob.data.name = 'objectData2'
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\snap____.ttf')
ob.data.font = fnt
ob.data.size = 1
# Inherited Curve attributes
ob.data.extrude = 0.25
setMaterial(ob, blue)
bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve thing#3
bpy.ops.object.text_add(
location=(1, -2, 5),
rotation=(pi/2, 0.5, -0.6))
ob = bpy.context.object
ob.name = 'object3'
# TextCurve attributes
ob.data.body = 'JKLMNOP'
ob.data.name = 'objectData3'
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\mistral.ttf')
ob.data.font = fnt
ob.data.size = 1
# Inherited Curve attributes
ob.data.extrude = 0.25
setMaterial(ob, blue)
bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve thing#4
bpy.ops.object.text_add(
location=(-5, -1, 0),
rotation=(pi/2, 0, -0.7))
ob = bpy.context.object
ob.name = 'object4'
# TextCurve attributes
ob.data.body = 'QRSTUVW'
ob.data.name = 'objectData4'
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\chiller.ttf')
ob.data.font = fnt
ob.data.size = 1
# Inherited Curve attributes
ob.data.extrude = 0.25
setMaterial(ob, blue)
bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve thing#5
bpy.ops.object.text_add(
location=(-4.5, -1, 3),
rotation=(pi/2, -0.8, 0.7))
ob = bpy.context.object
ob.name = 'object5'
# TextCurve attributes
ob.data.body = '9876543'
ob.data.name = 'objectData5'
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\oldengl.ttf')
ob.data.font = fnt
ob.data.size = 1
# Inherited Curve attributes
ob.data.extrude = 0.25
setMaterial(ob, blue)
bpy.ops.object.convert(target='MESH', keep_original=False)
"""

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')