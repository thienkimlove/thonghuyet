<?php

namespace App\Providers;

use App\Category;
use App\Post;
use App\Product;
use App\Video;
use Illuminate\Support\ServiceProvider;

class ViewComposerProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
        view()->composer(
            'profile', 'App\Http\ViewComposers\ProfileComposer'
        );

        // Using Closure based composers...
        view()->composer('dashboard', function ($view) {
            //
        });

        view()->composer('example.composer', function ($view) {
            $view->with('latestPosts',  Post::latest()->limit(6)->get());
        });
        view()->composer('frontend.header', function ($view) {          
            $view->with('headerCategories',  Category::whereNull('parent_id')->get());
            $view->with('menuProducts',  Product::all());           
        });

        view()->composer('frontend.right', function ($view) {            
            $view->with('featureVideos',  Video::latest('updated_at')->limit(3)->get());
            $view->with('featureNews', Post::publish()->latest('updated_at')->limit(5)->get());
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
