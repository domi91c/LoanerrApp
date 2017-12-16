Rails.application.routes.draw do
  get '*path', to: 'visitors#index'
end
