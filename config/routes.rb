Rails.application.routes.draw do
  get 'recipes/index'
  post 'recipes/create'
  get 'show/:id', to: 'recipes#show'
  delete 'destroy/:id', to: 'recipes#destroy'
  root to: 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
