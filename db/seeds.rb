# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
Color.delete_all
Color.create!([
    { :name => "Almond", :color => "EFDECD" },
    { :name => "Antique Brass", :color => "CD9575" },
    { :name => "Apricot", :color => "FDD9B5" },
    { :name => "Aquamarine", :color => "78DBE2" },
    { :name => "Asparagus", :color => "87A96B" },
    { :name => "Atomic Tangerine", :color => "FFA474" },
    { :name => "Banana Mania", :color => "FAE7B5" },
    { :name => "Beaver", :color => "9F8170" },
    { :name => "Bittersweet", :color => "FD7C6E" },
    { :name => "Black", :color => "000000" },
    { :name => "Blizzard Blue", :color => "ACE5EE" },
    { :name => "Blue", :color => "1F75FE" },
    { :name => "Blue Bell", :color => "A2A2D0" },
    { :name => "Blue Gray", :color => "6699CC" },
    { :name => "Blue Green", :color => "0D98BA" },
    { :name => "Blue Violet", :color => "7366BD" },
    { :name => "Blush", :color => "DE5D83" },
    { :name => "Brick Red", :color => "CB4154" },
    { :name => "Brown", :color => "B4674D" },
    { :name => "Burnt Orange", :color => "FF7F49" },
    { :name => "Burnt Sienna", :color => "EA7E5D" },
    { :name => "Cadet Blue", :color => "B0B7C6" },
    { :name => "Canary", :color => "FFFF99" },
    { :name => "Caribbean Green", :color => "1CD3A2" },
    { :name => "Carnation Pink", :color => "FFAACC" },
    { :name => "Cerise", :color => "DD4492" },
    { :name => "Cerulean", :color => "1DACD6" },
    { :name => "Chestnut", :color => "BC5D58" },
    { :name => "Copper", :color => "DD9475" },
    { :name => "Cornflower", :color => "9ACEEB" },
    { :name => "Cotton Candy", :color => "FFBCD9" }
    
  ])
