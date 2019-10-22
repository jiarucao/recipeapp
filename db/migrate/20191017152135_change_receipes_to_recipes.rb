class ChangeReceipesToRecipes < ActiveRecord::Migration[6.0]
  def change
    rename_table :receipes, :recipes
  end
end
