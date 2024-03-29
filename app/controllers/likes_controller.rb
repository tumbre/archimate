class LikesController < ApplicationController
  before_action :authenticate_user!

  def create
    @architecture = Architecture.find(params[:architecture_id])
    current_user.like(@architecture)
    redirect_back fallback_location: root_path if URI(request.referer.to_s).path == root_path
  end

  def destroy
    @architecture = current_user.likes.find(params[:id]).architecture
    current_user.unlike(@architecture)
  end
end
